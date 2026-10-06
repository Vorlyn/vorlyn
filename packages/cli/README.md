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

`pnpm dlx vorlyn ...` and `bunx vorlyn ...` work the same way.

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

- `baseDir` — where components will be installed. Default: `src`
- `alias` — the import alias used inside installed component files. Default: `@/`

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

- Resolve components from the Vorlyn registry, including the other Vorlyn components they depend on (for example, `button` also installs `spinner`, `icon` and `image`).
- Find your project root by looking for `vorlyn.json` in the current and parent folders, so you can run it from a subdirectory.
- Copy component source files into your project and rewrite the configured import alias inside them.
- Ask before overwriting existing files.
- Detect your package manager from the nearest lockfile.
- Ask once before installing npm dependencies, and skip the ones already listed in your `package.json`.
- Run the install in your project root. In a pnpm workspace, that is the package that contains `vorlyn.json`.

If you decline an overwrite, only the conflicting files are skipped. Other new files from the requested component can still be installed.

If no `vorlyn.json` is found, Vorlyn falls back to the defaults (`baseDir: src`, alias `@/`) and works relative to the current folder. Run `vorlyn init` in your project root first.

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

## Update notifications

At most once every 24 hours, the CLI checks the npm registry for a newer version of `vorlyn` and prints a short notice with an upgrade command for the package manager it appears to have been installed with. This is a network request to `registry.npmjs.org` with a short timeout. Failures are ignored silently and never block the command. The time of the last check is stored in `~/.vorlyn/`.

There is currently no option to disable this check.

## Requirements

- Node.js >= 22
- Tested with pnpm on macOS and bun on Windows. yarn and npm are supported in the code but not yet verified, and only a pnpm workspace has been tried.
- Vite projects are currently the primary tested environment.
- Tailwind CSS (the components use Tailwind v4 syntax) with theme CSS variables such as `--muted`, `--popover`, `--foreground` and `--ring` defined in your project. Without them the components render unstyled.

Other frameworks and bundlers may work, but they are not currently verified as part of the supported workflow.

## Registry

Vorlyn components are maintained in the `packages/react` package and are generated into the CLI registry.

The registry contains the component source files, external npm dependencies, and internal Vorlyn registry dependencies required to install each component.

The CLI resolves registry dependencies recursively, so installing a component can automatically install the other Vorlyn components it depends on.

## Development

Vorlyn is a pnpm monorepo.

```text
packages/
├── cli/          # The vorlyn CLI
├── react/        # React components
├── react-query/  # @vorlyn/react-query (private, not published)
└── utils/        # @vorlyn/utils

apps/
└── playground/   # Local component playground
```

Install dependencies:

```bash
pnpm install
```

Generate the CLI registry:

```bash
pnpm --filter vorlyn generate-registry
```

The generated registry is used by the CLI during development and packaging.

## Contributing

Vorlyn is currently maintained as a solo project and is actively evolving.

Contributions, issues, bug reports, and suggestions are welcome.

Before contributing, make sure the registry is generated after making changes to components:

```bash
pnpm --filter vorlyn generate-registry
```

If your change affects the `vorlyn` CLI, `@vorlyn/utils`, or any component in `packages/react`, add a changeset describing it:

```bash
pnpm changeset
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT