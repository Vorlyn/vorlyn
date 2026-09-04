import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REGISTRY_DIR = join(__dirname, "../../registry/react");

interface RegistryFile {
  path: string;
  content: string;
  target: string;
}

interface RegistryComponent {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface ResolvedRegistry {
  components: RegistryComponent[];
  files: RegistryFile[];
  dependencies: string[];
}

function loadComponent(name: string): RegistryComponent {
  const filePath = join(REGISTRY_DIR, `${name}.json`);
  if (!existsSync(filePath)) {
    throw new Error(
      `Component "${name}" not found in registry. Did you run "generate-registry"?`
    );
  }
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

function resolveDependencyTree(
  name: string,
  visited: Set<string>,
  resolved: RegistryComponent[]
): void {
  if (visited.has(name)) return;
  visited.add(name);

  const component = loadComponent(name);

  for (const depName of component.registryDependencies) {
    resolveDependencyTree(depName, visited, resolved);
  }

  resolved.push(component);
}

export function resolveComponent(name: string): ResolvedRegistry {
  const visited = new Set<string>();
  const components: RegistryComponent[] = [];

  resolveDependencyTree(name, visited, components);

  const files: RegistryFile[] = [];
  const seenTargets = new Set<string>();
  const dependencies = new Set<string>();

  for (const component of components) {
    for (const dep of component.dependencies) {
      dependencies.add(dep);
    }
    for (const file of component.files) {
      if (!seenTargets.has(file.target)) {
        seenTargets.add(file.target);
        files.push(file);
      }
    }
  }

  return {
    components,
    files,
    dependencies: Array.from(dependencies),
  };
}