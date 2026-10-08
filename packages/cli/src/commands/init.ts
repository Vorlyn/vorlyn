import prompts from "prompts";
import {
  saveConfig,
  DEFAULT_CONFIG,
  type VorlynConfig,
  detectAliasConfigured,
} from "../config.js";
import { warnIfTailwindUnsupported } from "../utils/tailwind.js";
import { findPackageJsonDir } from "../utils/package-json.js";

export async function initCommand(cwd: string = process.cwd()): Promise<void> {
  const projectRoot = findPackageJsonDir(cwd);
  if (projectRoot === null) {
    console.error(
      "\n❌ No package.json found in this folder or any parent folder.\n" +
        "   Run `vorlyn init` inside your project.",
    );
    process.exit(1);
  }
  if (projectRoot !== cwd) {
    console.log(`Using project root: ${projectRoot}\n`);
  }
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

  saveConfig(projectRoot, config);
  const isConfigured = detectAliasConfigured(projectRoot, config.alias);
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

  warnIfTailwindUnsupported(projectRoot);

  console.log(`\n✅ vorlyn.json created.`);
}
