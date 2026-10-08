import { existsSync, readFileSync } from "fs";
import { join } from "path";

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

export function getPackageName(spec: string): string {
  const versionAt = spec.lastIndexOf("@");
  return versionAt > 0 ? spec.slice(0, versionAt) : spec;
}

export function readDependencies(projectRoot: string): Record<string, string> {
  const pkgPath = join(projectRoot, "package.json");
  if (!existsSync(pkgPath)) return {};
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as PackageJson;
    return { ...pkg.devDependencies, ...pkg.dependencies };
  } catch {
    return {};
  }
}