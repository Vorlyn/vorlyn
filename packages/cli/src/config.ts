import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export interface VorlynConfig {
  baseDir: string;
  alias: string;
}

export const DEFAULT_CONFIG: VorlynConfig = {
  baseDir: "",
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
