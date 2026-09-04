import { resolveComponent } from "../src/registry/resolver";

const result = resolveComponent("button");

console.log("Components (in order):", result.components.map((c) => c.name));
console.log("Merged dependencies:", result.dependencies);
console.log("Total files:", result.files.length);
console.log("File targets:", result.files.map((f) => f.target));