import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { execSync } from "child_process";
import prompts from "prompts";

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

function detectPackageManager(cwd: string): PackageManager {
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(join(cwd, "yarn.lock"))) return "yarn";
  if (existsSync(join(cwd, "bun.lock"))) return "bun";
  return "npm";
}

function getInstallCommand(pm: PackageManager, packages: string[]): string {
  const pkgList = packages.join(" ");
  switch (pm) {
    case "pnpm":
      return `pnpm add ${pkgList}`;
    case "yarn":
      return `yarn add ${pkgList}`;
    case "npm":
      return `npm install ${pkgList}`;
    case "bun":
      return `bun add ${pkgList}`;
  }
}

async function confirmOverwrite(existingFiles: string[]): Promise<boolean> {
  console.log("\nThe following files already exist:");
  for (const file of existingFiles) {
    console.log(`  - ${file}`);
  }
  const { overwrite } = await prompts({
    type: "confirm",
    name: "overwrite",
    message: `Overwrite ${existingFiles.length} existing file(s)?`,
    initial: false,
  });
  return Boolean(overwrite);
}

async function confirmInstall(dependencies: string[]): Promise<boolean> {
  console.log("\nThe following packages will be installed:");
  for (const dep of dependencies) {
    console.log(`  - ${dep}`);
  }
  const { install } = await prompts({
    type: "confirm",
    name: "install",
    message: `Install ${dependencies.length} package(s)?`,
    initial: true,
  });
  return Boolean(install);
}

export async function installComponent(
  registry: ResolvedRegistry,
  cwd: string = process.cwd(),
): Promise<void> {
  const existingFiles = registry.files.filter((file) =>
    existsSync(join(cwd, file.target)),
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
      console.log("Skipping existing files.");
    }
  }

  for (const file of filesToWrite) {
    const fullPath = join(cwd, file.target);
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, file.content);
    console.log(`✅ ${file.target}`);
  }

  if (registry.dependencies.length > 0) {
    const shouldInstall = await confirmInstall(registry.dependencies);
    if (shouldInstall) {
      const pm = detectPackageManager(cwd);
      const command = getInstallCommand(pm, registry.dependencies);
      console.log(`\nRunning: ${command}`);
      try {
        execSync(command, { cwd, stdio: "inherit" });
      } catch (error) {
        console.error(
          "\n⚠️  Dependency install failed. Files were still added — install manually:\n  " +
            command,
        );
      }
    } else {
      console.log(
        "\nSkipped dependency install. Run manually:\n  " +
          getInstallCommand(detectPackageManager(cwd), registry.dependencies),
      );
    }
  }

  console.log("\nDone.");
}
