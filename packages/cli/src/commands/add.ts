import { resolveComponents } from "../registry/resolver.js";
import { installComponent } from "../registry/installer.js";
import { warnIfTailwindUnsupported } from "../utils/tailwind.js";
import { findProjectRoot } from "../config.js";

export async function addCommand(componentNames: string[]): Promise<void> {
  try {
    console.log(
      `Resolving ${componentNames.map((n) => `"${n}"`).join(", ")}...\n`,
    );
    const registry = resolveComponents(componentNames);

    console.log(`Found ${registry.components.length} component(s) to install:`);
    for (const component of registry.components) {
      console.log(`  - ${component.name}`);
    }
    console.log();

    await installComponent(registry, process.cwd());
    warnIfTailwindUnsupported(findProjectRoot(process.cwd()));
    console.log("\nDone.");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`\n❌ ${error.message}`);
    } else {
      console.error("\n❌ An unknown error occurred.");
    }
    process.exit(1);
  }
}
