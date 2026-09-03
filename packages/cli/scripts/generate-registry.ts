import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { registryConfig } from "./registry-config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REGISTRY_OUTPUT_DIR = join(__dirname, "../registry/react");

for (const component of registryConfig) {
  const files = component.files.map((file) => {
    const fullPath = join(__dirname, file.sourcePath);
    const content = readFileSync(fullPath, "utf-8");
    return {
      path: file.targetPath,
      content,
      target: file.targetPath,
    };
  });

  const output = {
    name: component.name,
    type: component.type,
    dependencies: component.dependencies,
    registryDependencies: component.registryDependencies,
    files,
  };

  mkdirSync(REGISTRY_OUTPUT_DIR, { recursive: true });
  writeFileSync(
    join(REGISTRY_OUTPUT_DIR, `${component.name}.json`),
    JSON.stringify(output, null, 2),
  );
}

console.log(`✅ Generated ${registryConfig.length} registry file(s)`);
