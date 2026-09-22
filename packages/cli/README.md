# Vorlyn CLI

The `vorlyn` CLI — installs components from the Vorlyn registry directly into your project as editable source code.

## Status

Work in progress. Not yet published to npm — currently usable only via local development link (`pnpm link --global`).

## What & Why

Instead of installing a component library as an npm dependency, `vorlyn` copies real component source files into your own project (similar in spirit to shadcn/ui). You own and can freely edit every component you add — there's no black-box package to work around.

## Installation

```bash
npx vorlyn init
```

> Note: not yet published to npm. Until then, use a local link: `pnpm link --global` from `packages/cli`, then run `vorlyn` from your target project.

## Commands

### `vorlyn init`

Sets up Vorlyn in your project. Prompts for:

- `baseDir` — where components will be installed (default: `src`)
- `alias` — the import alias used inside installed component files (default: `@/`)

Saves these to a `vorlyn.json` config file in your project root. If your project's alias isn't detected in `tsconfig.json`/`jsconfig.json` (and, for Vite projects, `vite.config.ts`), a warning is printed — `vorlyn init` does not modify your config files automatically.

### `vorlyn add <components...>`

Installs one or more components and their dependencies into your project.

```bash
vorlyn add button
vorlyn add button badge avatar
```

- Resolves and installs any components the requested component(s) depend on internally (shared dependencies are only installed once).
- Detects your package manager (pnpm, yarn, bun, or npm) from your lockfile and installs any required npm dependencies.
- If a target file already exists, you'll be asked before it's overwritten; declining only skips the conflicting file(s) — other new files from the same component are still installed.

## Configuration

`vorlyn.json` (created by `vorlyn init`):

| Key | Default | Description |
|---|---|---|
| `baseDir` | `src` | Base directory where components are installed |
| `alias` | `@/` | Import alias rewritten inside installed component files |

## Requirements

- Node.js >= 22
- Tested with Vite projects only; other bundlers/frameworks not yet verified
- Package manager: pnpm, yarn, bun, or npm

## Known Limitations

- Not yet published to npm — `npx vorlyn` does not yet work for end users
- Alias detection is warn-only; it does not modify `tsconfig.json`/`vite.config.ts` for you
- Registry JSON (`packages/cli/registry/`) is currently generated locally and is not yet wired into a prepublish build step

## Contributing

Vorlyn is currently maintained solo, and this project is still actively evolving. Contributions, issues, and suggestions are welcome.

This is a pnpm monorepo:

- `packages/react` — the source of all UI components
- `packages/cli` — this package, the `vorlyn` CLI
- `packages/utils` — `@vorlyn/utils`, a small published npm package
- `apps/playground` — a Vite app for testing components locally

To get started locally:

```bash
pnpm install
pnpm --filter cli generate-registry
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT