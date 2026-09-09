import prompts from "prompts";
import { saveConfig, DEFAULT_CONFIG, type VorlynConfig } from "../config.js";

export async function initCommand(cwd: string = process.cwd()): Promise<void> {
  const response = await prompts([
    {
      type: "text",
      name: "baseDir",
      message:
        "Which folder should components be installed in? (Leave blank to use the project root.)",
      initial: DEFAULT_CONFIG.baseDir,
    },
    {
      type: "text",
      name: "alias",
      message: "What import alias would you like to use?",
      initial: DEFAULT_CONFIG.alias,
    },
  ]);

  if (response.baseDir === undefined || response.alias === undefined) {
    console.log("\nInit cancelled.");
    return;
  }

  const config: VorlynConfig = {
    baseDir: response.baseDir,
    alias: response.alias,
  };

  saveConfig(cwd, config);
  console.log(`\n✅ vorlyn.json created.`);
}
