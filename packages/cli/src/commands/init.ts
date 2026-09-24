import prompts from "prompts";
import {
  saveConfig,
  DEFAULT_CONFIG,
  type VorlynConfig,
  detectAliasConfigured,
} from "../config.js";

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
    baseDir: response.baseDir as string,
    alias: response.alias as string,
  };

  saveConfig(cwd, config);
  const isConfigured = detectAliasConfigured(cwd, config.alias);
  if (!isConfigured) {
    console.log(
      `\n⚠️  Could not confirm "${config.alias}*" is configured for module resolution.`,
    );
    console.log(`   Make sure it's set up in BOTH:`);
    console.log(`   1. tsconfig.json (for TypeScript):`);
    console.log(`      "paths": { "${config.alias}*": ["./src/*"] }`);
    console.log(`   2. vite.config.ts (for the bundler, if using Vite):`);
    console.log(
      `      resolve: { alias: { "@": path.resolve(__dirname, "./src") } }`,
    );
  }

  console.log(`\n✅ vorlyn.json created.`);
}
