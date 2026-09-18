import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export interface VorlynConfig {
  baseDir: string;
  alias: string;
}

export const DEFAULT_CONFIG: VorlynConfig = {
  baseDir: "src",
  alias: "@/",
};

const CONFIG_FILENAME = "vorlyn.json";

export function loadConfig(cwd: string): VorlynConfig {
  const configPath = join(cwd, CONFIG_FILENAME);
  if (!existsSync(configPath)) {
    return DEFAULT_CONFIG;
  }
  const raw = readFileSync(configPath, "utf-8");
  return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
}

export function saveConfig(cwd: string, config: VorlynConfig): void {
  const configPath = join(cwd, CONFIG_FILENAME);
  writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
}

export function detectAliasConfigured(cwd: string, alias: string): boolean {
  const aliasKey = alias.replace(/\/$/, "") + "/*";
  const aliasPrefix = alias.replace(/\/$/, "");

  const visited = new Set<string>();

  function checkTsConfig(filename: string): boolean {
    const filePath = join(cwd, filename);
    if (visited.has(filePath)) return false;
    visited.add(filePath);
    if (!existsSync(filePath)) return false;

    try {
      const raw = readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(raw);
      const paths = parsed.compilerOptions?.paths ?? {};

      if (Object.keys(paths).some((key) => key === aliasKey)) {
        return true;
      }

      const references = parsed.references ?? [];
      for (const reference of references) {
        if (!reference.path) continue;
        const referencePath = reference.path.endsWith(".json")
          ? reference.path
          : `${reference.path}.json`;
        if (checkTsConfig(referencePath)) return true;
      }
    } catch {
      return false;
    }
    return false;
  }

  function checkViteConfig(): boolean {
    for (const filename of ["vite.config.ts", "vite.config.js"]) {
      const filePath = join(cwd, filename);
      if (!existsSync(filePath)) continue;

      try {
        const content = readFileSync(filePath, "utf-8");
        if (content.includes("resolve") && content.includes(aliasPrefix)) {
          return true;
        }
      } catch {
        continue;
      }
    }
    return false;
  }

  const tsConfigured = checkTsConfig("tsconfig.json") || checkTsConfig("jsconfig.json");
  const viteExists = existsSync(join(cwd, "vite.config.ts")) || existsSync(join(cwd, "vite.config.js"));

  if (viteExists) {
    return tsConfigured && checkViteConfig();
  }

  return tsConfigured;
}
