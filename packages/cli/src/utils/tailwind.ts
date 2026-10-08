import { readDependencies } from "./package-json.js";

export type TailwindStatus =
  | { kind: "missing" }
  | { kind: "outdated"; range: string }
  | { kind: "supported" }
  | { kind: "unknown" };

const MIN_SUPPORTED_MAJOR = 4;

const V4_PACKAGES = [
  "@tailwindcss/vite",
  "@tailwindcss/postcss",
  "@tailwindcss/cli",
];

function parseMajor(range: string): number | null {
  const value = range.trim();
  if (/\s|\|\|/.test(value)) return null;
  const match = /^[~^]?v?(\d+)(?:\.|$)/.exec(value);
  return match ? Number(match[1]) : null;
}

export function detectTailwind(projectRoot: string): TailwindStatus {
  const dependencies = readDependencies(projectRoot);

  if (V4_PACKAGES.some((name) => name in dependencies)) {
    return { kind: "supported" };
  }

  const range: string | undefined = dependencies.tailwindcss;
  if (range === undefined) return { kind: "missing" };

  const major = parseMajor(range);
  if (major === null) return { kind: "unknown" };

  return major >= MIN_SUPPORTED_MAJOR
    ? { kind: "supported" }
    : { kind: "outdated", range };
}

export function warnIfTailwindUnsupported(projectRoot: string): void {
  const status = detectTailwind(projectRoot);

  if (status.kind === "missing") {
    console.log(
      "\n⚠️  Tailwind CSS was not found in your package.json.\n" +
        "   Vorlyn components are styled with Tailwind CSS (v4 syntax) and expect theme\n" +
        "   variables such as --muted and --popover. Without them they render unstyled.\n" +
        "   (If Tailwind is installed at your workspace root, you can ignore this.)",
    );
    return;
  }

  if (status.kind === "outdated") {
    console.log(
      `\n⚠️  Tailwind CSS ${status.range} was found in your package.json.\n` +
        "   Vorlyn components use Tailwind CSS v4 syntax, so some styles may not apply.\n" +
        "   Upgrade to Tailwind CSS v4 to use them as intended.",
    );
  }
}