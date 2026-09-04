import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { resolveComponent } from "../src/registry/resolver";
import { installComponent } from "../src/registry/installer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_PROJECT_DIR = join(__dirname, "../test-project");

async function main() {
  const registry = resolveComponent("button");
  console.log(`Installing "button" into: ${TEST_PROJECT_DIR}\n`);
  await installComponent(registry, TEST_PROJECT_DIR);
}

main();