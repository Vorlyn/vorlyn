import { resolveComponent } from "../registry/resolver.js";
import { installComponent } from "../registry/installer.js";

export async function addCommand(componentName: string): Promise<void> {
  try {
    console.log(`Resolving "${componentName}"...\n`);
    const registry = resolveComponent(componentName);

    console.log(`Found ${registry.components.length} component(s) to install:`);
    for (const component of registry.components) {
      console.log(`  - ${component.name}`);
    }
    console.log();

    await installComponent(registry, process.cwd());
  } catch (error) {
    if (error instanceof Error) {
      console.error(`\n❌ ${error.message}`);
    } else {
      console.error("\n❌ An unknown error occurred.");
    }
    process.exit(1);
  }
}