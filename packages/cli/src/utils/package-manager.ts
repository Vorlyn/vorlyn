import { dirname } from "path";
import { fileURLToPath } from "url";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const moduleDir = dirname(fileURLToPath(import.meta.url));

function fromUserAgent(): PackageManager | null {
  const userAgent = process.env.npm_config_user_agent ?? "";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("bun")) return "bun";
  if (userAgent.startsWith("npm")) return "npm";
  return null;
}

function fromInstallPath(): PackageManager | null {
  const installPath = moduleDir.replaceAll("\\", "/").toLowerCase();
  if (installPath.includes("/pnpm/") || installPath.includes("/.pnpm/")) return "pnpm";
  if (installPath.includes("/.bun/")) return "bun";
  if (installPath.includes("/yarn/")) return "yarn";
  return null;
}

export function detectCliPackageManager(): PackageManager {
  return fromUserAgent() ?? fromInstallPath() ?? "npm";
}

export function getUpgradeCommand(
  pm: PackageManager,
  pkgName: string,
): string {
  switch (pm) {
    case "pnpm":
      return `pnpm add -g ${pkgName}@latest`;
    case "yarn":
      return `yarn global add ${pkgName}@latest`;
    case "bun":
      return `bun add -g ${pkgName}@latest`;
    case "npm":
      return `npm install -g ${pkgName}@latest`;
  }
}