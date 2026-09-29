# Vorlyn CLI

The `vorlyn` CLI installs components from the Vorlyn registry directly into your project as editable source code.

## Status

The CLI is published on npm and available for use.

Vorlyn is still actively evolving, so some features and supported project configurations may change as the project develops.

## What & Why

Instead of installing a component library as an npm dependency, `vorlyn` copies real component source files into your own project, similar in spirit to shadcn/ui.

You own the source code of every component you add. The installed components are editable files inside your project rather than black-box components locked behind a package dependency.

## Usage

You can run Vorlyn without installing it globally:

```bash
npx vorlyn init
```

Then add components:

```bash
npx vorlyn add button
```

You can also install the CLI globally if you prefer:

```bash
npm install -g vorlyn
```

Then use:

```bash
vorlyn init
vorlyn add button
```

## Commands

### `vorlyn init`

Initializes Vorlyn in your project.

The command prompts for:

* `baseDir` — where components will be installed. Default: `src`
* `alias` — the import alias used inside installed component files. Default: `@/`

The configuration is saved to a `vorlyn.json` file in your project root.

Example:

```json
{
  "baseDir": "src",
  "alias": "@/"
}
```

During initialization, Vorlyn checks whether the configured alias is already present in your project's TypeScript/JavaScript configuration.

For Vite projects, it also checks the Vite configuration.

If the alias is not detected, Vorlyn prints a warning. It does **not** modify your project configuration files automatically.

### `vorlyn add <components...>`

Installs one or more components and their dependencies into your project.

```bash
vorlyn add button

vorlyn add button badge avatar
```

Vorlyn will:

* Resolve components from the Vorlyn registry.
* Resolve internal registry dependencies automatically.
* Install shared dependencies only once.
* Copy component source files into your project.
* Rewrite the configured import alias inside installed files.
* Detect your package manager from the project's lockfile.
* Install required npm dependencies using pnpm, yarn, bun, or npm.
* Ask before overwriting existing files.

If you decline an overwrite, only the conflicting files are skipped. Other new files from the requested component can still be installed.

## Configuration

Vorlyn stores project-specific configuration in `vorlyn.json`.

| Key       | Default | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| `baseDir` | `src`   | Base directory where components are installed           |
| `alias`   | `@/`    | Import alias rewritten inside installed component files |

Example:

```json
{
  "baseDir": "src",
  "alias": "@/"
}
```

### Alias configuration

Vorlyn does not configure aliases for you.

For example, if you use:

```json
{
  "alias": "@/"
}
```

your project should already have the corresponding alias configured for both TypeScript and your bundler where required.

For Vite projects, this generally means configuring the alias in both the TypeScript configuration and Vite configuration.

## Requirements

* Node.js >= 22
* pnpm, yarn, bun, or npm
* Vite projects are currently the primary tested environment

Other frameworks and bundlers may work, but they are not currently verified as part of the supported workflow.

## Registry

Vorlyn components are maintained in the `packages/react` package and are generated into the CLI registry.

The registry contains the component source files, external npm dependencies, and internal Vorlyn registry dependencies required to install each component.

The CLI resolves registry dependencies recursively, so installing a component can automatically install the other Vorlyn components it depends on.

## Development

Vorlyn is a pnpm monorepo.

```text
packages/
├── cli/         # The vorlyn CLI
├── react/       # React components
└── utils/       # @vorlyn/utils

apps/
└── playground/  # Local component playground
```

Install dependencies:

```bash
npm install
```

Generate the CLI registry:

```bash
npm --filter cli generate-registry
```

The generated registry is used by the CLI during development and packaging.

## Contributing

Vorlyn is currently maintained as a solo project and is actively evolving.

Contributions, issues, bug reports, and suggestions are welcome.

Before contributing, make sure the registry is generated after making changes to components:

```bash
npm --filter cli generate-registry
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT
