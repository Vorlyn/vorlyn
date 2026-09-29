import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, "../../package.json");
const CACHE_DIR = join(homedir(), ".vorlyn");
const CACHE_FILE = join(CACHE_DIR, "update-for-check.json");
const CHECK_INTERVAL_MS = 1000 * 60 * 60 * 24;

interface PackageManifest {
  name: string;
  version: string;
}

interface UpdateCache {
  lastChecked: number;
}

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

function getCurrentPackageInfo(): PackageManifest {
  const raw = readFileSync(packageJsonPath, "utf-8");
  return JSON.parse(raw) as PackageManifest;
}

function readCache(): UpdateCache | null {
  if (!existsSync(CACHE_FILE)) return null;
  try {
    return JSON.parse(readFileSync(CACHE_FILE, "utf-8")) as UpdateCache;
  } catch {
    return null;
  }
}

function writeCache(): void {
  try {
    mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify({ lastChecked: Date.now() }));
  } catch {
    // This is non-critical; if we can't write the cache, we just won't check for updates next time.
  }
}

function shouldCheck(): boolean {
  const cache = readCache();
  if (!cache) return true;
  return Date.now() - cache.lastChecked > CHECK_INTERVAL_MS;
}

function detectInvokingPackageManager(): PackageManager {
  const userAgent = process.env.npm_config_user_agent ?? "";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("bun")) return "bun";
  return "npm";
}

function getUpgradeCommand(pm: PackageManager, pkgName: string): string {
  switch (pm) {
    case "pnpm":
      return `pnpm add -g ${pkgName}`;
    case "yarn":
      return `yarn global add ${pkgName}`;
    case "bun":
      return `bun add -g ${pkgName}`;
    case "npm":
      return `npm install -g ${pkgName}`;
  }
}

async function fetchLatestVersion(pkgName: string): Promise<string | null> {
  return new Promise((resolve) => {
    const req = https.get(
      `https://registry.npmjs.org/${pkgName}/latest`,
      { timeout: 1000 },
      (res) => {
        let data = "";
        res.on("data", (chunk: Buffer) => {
          data += chunk.toString();
        });
        res.on("end", () => {
          try {
            const parsed = JSON.parse(data) as { version?: string };
            resolve(parsed.version ?? null);
          } catch {
            resolve(null);
          }
        });
      },
    );
    req.on("error", () => resolve(null));
    req.on("timeout", () => {
      req.destroy();
      resolve(null);
    });
  });
}

function isNewerVersion(latest: string, current: string): boolean {
  const parse = (v: string) => v.split(".").map(Number);
  const [lMaj, lMin, lPatch] = parse(latest);
  const [cMaj, cMin, cPatch] = parse(current);
  if (lMaj !== cMaj) return lMaj > cMaj;
  if (lMin !== cMin) return lMin > cMin;
  return lPatch > cPatch;
}

export async function checkForUpdate(): Promise<void> {
  if (!shouldCheck()) return;

  const { name, version } = getCurrentPackageInfo();
  const latest = await fetchLatestVersion(name);
  writeCache();

  if (!latest || !isNewerVersion(latest, version)) return;

  const pm = detectInvokingPackageManager();
  const upgradeCommand = getUpgradeCommand(pm, name);

  console.log(
    `\n📦 Update available: ${version} → ${latest}\n   Run \`${upgradeCommand}\` to upgrade.\n`,
  );
}