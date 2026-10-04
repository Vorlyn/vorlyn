import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { execSync } from "child_process";
import prompts from "prompts";
import { findProjectRoot, loadConfig } from "../config.js";

interface RegistryFile {
  path: string;
  content: string;
  target: string;
}

interface ResolvedRegistry {
  files: RegistryFile[];
  dependencies: string[];
}

type PackageManager = "pnpm" | "yarn" | "npm" | "bun";

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

function getPackageName(spec: string): string {
  const versionAt = spec.lastIndexOf("@");
  return versionAt > 0 ? spec.slice(0, versionAt) : spec;
}

function getInstalledPackages(projectRoot: string): Set<string> {
  const pkgPath = join(projectRoot, "package.json");
  if (!existsSync(pkgPath)) return new Set();
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as PackageJson;
    return new Set([
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.devDependencies ?? {}),
    ]);
  } catch {
    return new Set();
  }
}

function findLockfileDir(startDir: string): string {
  let dir = startDir;
  while (true) {
    if (
      existsSync(join(dir, "pnpm-lock.yaml")) ||
      existsSync(join(dir, "yarn.lock")) ||
      existsSync(join(dir, "bun.lock"))
    ) {
      return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) return startDir;
    dir = parent;
  }
}

function detectPackageManager(cwd: string): PackageManager {
  const dir = findLockfileDir(cwd);
  if (existsSync(join(dir, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(join(dir, "yarn.lock"))) return "yarn";
  if (existsSync(join(dir, "bun.lock"))) return "bun";
  return "npm";
}

function getInstallCommand(
  pm: PackageManager,
  packages: string[],
  atWorkspaceRoot = false,
): string {
  const pkgList = packages.join(" ");
  switch (pm) {
    case "pnpm":
      return `pnpm add ${atWorkspaceRoot ? "-w " : ""}${pkgList}`;
    case "yarn":
      return `yarn add ${pkgList}`;
    case "npm":
      return `npm install ${pkgList}`;
    case "bun":
      return `bun add ${pkgList}`;
  }
}

function rewriteAlias(content: string, alias: string): string {
  if (alias === "@/") return content;
  return content.replaceAll('"@/', `"${alias}`).replaceAll("'@/", `'${alias}`);
}

async function confirmOverwrite(existingFiles: string[]): Promise<boolean> {
  console.log("\nThe following files already exist:");
  for (const file of existingFiles) {
    console.log(`  - ${file}`);
  }
  const { overwrite } = (await prompts({
    type: "confirm",
    name: "overwrite",
    message: `Overwrite ${existingFiles.length} existing file(s)?`,
    initial: false,
  })) as { overwrite?: boolean };
  return Boolean(overwrite);
}

async function confirmInstall(dependencies: string[]): Promise<boolean> {
  console.log("\nThe following packages will be installed:");
  for (const dep of dependencies) {
    console.log(`  - ${dep}`);
  }
  const { install } = (await prompts({
    type: "confirm",
    name: "install",
    message: `Install ${dependencies.length} package(s)?`,
    initial: true,
  })) as { install?: boolean };
  return Boolean(install);
}

export async function installComponent(
  registry: ResolvedRegistry,
  cwd: string = process.cwd(),
): Promise<void> {
  const projectRoot = findProjectRoot(cwd);
  if (projectRoot !== cwd) {
    console.log(`Using project root: ${projectRoot}\n`);
  }
  const config = loadConfig(projectRoot);

  const existingFiles = registry.files.filter((file) =>
    existsSync(join(projectRoot, config.baseDir, file.target)),
  );

  let filesToWrite = registry.files;

  if (existingFiles.length > 0) {
    const shouldOverwrite = await confirmOverwrite(
      existingFiles.map((f) => f.target),
    );
    if (!shouldOverwrite) {
      const existingTargets = new Set(existingFiles.map((f) => f.target));
      filesToWrite = registry.files.filter(
        (f) => !existingTargets.has(f.target),
      );
      console.log(`\nSkipping ${existingFiles.length} existing file(s).`);
      if (filesToWrite.length > 0) {
        console.log(`Proceeding with ${filesToWrite.length} new file(s):`);
        for (const f of filesToWrite) {
          console.log(`  - ${f.target}`);
        }
      } else {
        console.log("No new files to add.");
      }
    }
  }

  for (const file of filesToWrite) {
    const fullPath = join(projectRoot, config.baseDir, file.target);
    const content = rewriteAlias(file.content, config.alias);
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, content);
    console.log(`✅ ${join(config.baseDir, file.target)}`);
  }

  const installed = getInstalledPackages(projectRoot);
  const missingDependencies = registry.dependencies.filter(
    (dep) => !installed.has(getPackageName(dep)),
  );

  if (missingDependencies.length > 0) {
    const pm = detectPackageManager(projectRoot);
    const atWorkspaceRoot = existsSync(
      join(projectRoot, "pnpm-workspace.yaml"),
    );
    const shouldInstall = await confirmInstall(missingDependencies);
    if (shouldInstall) {
      const failed: string[] = [];
      for (const dep of missingDependencies) {
        const command = getInstallCommand(pm, [dep], atWorkspaceRoot);
        console.log(`\nRunning: ${command}`);
        try {
          execSync(command, { cwd: projectRoot, stdio: "inherit" });
        } catch {
          failed.push(dep);
        }
      }
      if (failed.length > 0) {
        console.error(
          `\n⚠️  Failed to install: ${failed.join(", ")}\nInstall manually once available.`,
        );
      }
    } else {
      console.log(
        "\nSkipped dependency install. Run manually:\n  " +
          getInstallCommand(pm, missingDependencies, atWorkspaceRoot),
      );
    }
  } else if (registry.dependencies.length > 0) {
    console.log("\nAll required packages are already installed.");
  }

  console.log("\nDone.");
}
