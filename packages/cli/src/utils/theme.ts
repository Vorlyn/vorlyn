import { existsSync, readFileSync } from "fs";
import { join } from "path";

export type ThemeStatus = "present" | "missing" | "unknown";

const CSS_CANDIDATES = [
  "src/index.css",
  "src/App.css",
  "src/app/globals.css",
  "app/globals.css",
  "styles/globals.css",
];

export function detectTheme(projectRoot: string): ThemeStatus {
  let foundFile = false;
  for (const candidate of CSS_CANDIDATES) {
    const fullPath = join(projectRoot, candidate);
    if (!existsSync(fullPath)) continue;
    foundFile = true;
    try {
      const css = readFileSync(fullPath, "utf-8");
      if (/--(primary|muted|background)\s*:/.test(css)) return "present";
    } catch {
      return "unknown";
    }
  }
  return foundFile ? "missing" : "unknown";
}