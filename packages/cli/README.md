# Vorlyn CLI

The `vorlyn` CLI installs components, hooks, an API layer and a theme from the Vorlyn registry directly into your project as editable source code.

## Status

The CLI is published on npm and available for use.

Vorlyn is still actively evolving and is below 1.0, so features, registry items and supported project configurations may change between versions.

## What & Why

Instead of installing a component library as an npm dependency, `vorlyn` copies real source files into your own project, similar in spirit to shadcn/ui.

You own the source code of everything you add. Installed files are editable files inside your project rather than black-box components locked behind a package dependency.

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
- `alias` — the import alias used inside installed files. Default: `@/`
- **theme** — whether to install the Vorlyn theme (see [Theme](#theme)). The prompt is only shown when it makes sense:
  - theme variables already found in your CSS: the step is skipped
  - theme variables not found: asked, default **yes**
  - could not tell (no known CSS file found): asked, default **no**

The configuration is saved to a `vorlyn.json` file in your project root.

Example:

```json
{
  "baseDir": "src",
  "alias": "@/"
}
```

During initialization, Vorlyn checks whether the configured alias is already present in your project's TypeScript/JavaScript configuration. For Vite projects, it also checks the Vite configuration.

If the alias is not detected, Vorlyn prints a warning. It does **not** modify your project configuration files automatically.

Run it from anywhere inside your project. Vorlyn creates `vorlyn.json` in the nearest parent folder that contains a `package.json`, and stops with an error if there is none.

### `vorlyn add <items...>`

Installs one or more registry items and their dependencies into your project.

```bash
vorlyn add button

vorlyn add button badge avatar

vorlyn add use-debounce

vorlyn add theme
```

Vorlyn will:

- Resolve items from the Vorlyn registry, including the other Vorlyn items they depend on (for example, `button` also installs `spinner`, `icon` and `image`).
- Find your project root by looking for `vorlyn.json` in the current and parent folders, so you can run it from a subdirectory.
- Copy source files into your project and rewrite the configured import alias inside them.
- Ask before overwriting existing files.
- Detect your package manager from the nearest lockfile.
- Ask once before installing npm dependencies, and skip the ones already listed in your `package.json`.
- Run the install in your project root. In a pnpm workspace, that is the package that contains `vorlyn.json`.
- Print **Next steps** after the install when an item needs something from you (for example, an item that expects a config file to be edited). Messages from all installed items are collected, de-duplicated and printed once, at the very end.

If you decline an overwrite, only the conflicting files are skipped. Other new files from the requested item can still be installed.

`vorlyn add` requires a `vorlyn.json`. If none is found in the current or any parent folder, it stops with an error. Run `vorlyn init` in your project root first.

#### If the dependency install fails

Installing npm dependencies can fail for reasons that have nothing to do with Vorlyn, for example a peer dependency conflict (`ERESOLVE`) already present in your project's dependency tree.

When that happens, Vorlyn still copies the files and then prints the exact install command for the packages that failed, so you can run it yourself. Vorlyn never adds flags such as `--legacy-peer-deps` on its own; whether to use them is your decision.

## What's in the registry

The registry currently has around 49 items in total (components, hooks and the API layer together).

| Kind | Items |
| --- | --- |
| Components | UI components, including Vorlyn wrappers and components taken directly from shadcn/ui, such as `button`, `badge`, `avatar`, `dialog`, `select`, `combobox`, `accordion`, `carousel` |
| Hooks | `use-debounce`, `use-is-mobile`, `break-points` |
| API layer | `axios-instance`, `api-client`, `react-query` |
| Theme | `theme` |

Components are built on [Base UI](https://base-ui.com) primitives (not Radix) and use Tailwind CSS v4 syntax. Shared components only use the standard shadcn token names (`background`, `foreground`, `primary`, `muted`, `destructive`, `border`, `ring`, and so on), so they work with any theme that defines them.

Icons come from [`lucide-react`](https://lucide.dev), which is installed as a dependency when a component needs it.

## Theme

Components rely on theme CSS variables such as `--muted`, `--popover`, `--foreground` and `--ring`. Without them they render unstyled.

If your project does not have these variables yet, the `theme` item gives you a starting point:

```bash
vorlyn add theme
```

(or accept the prompt during `vorlyn init`). This installs a `vorlyn-theme.css` file (by default `src/vorlyn-theme.css`) and the `tw-animate-css` dependency. The file contains:

- the neutral shadcn theme variables for light and dark mode (`:root`, `.dark`)
- the `@theme inline` token mapping, including chart and sidebar tokens and the radius scale
- the accordion animations used by the Base UI accordion
- a `no-scrollbar` utility

It does **not** include `@import "tailwindcss"`, fonts or `@source` rules. Those stay yours.

Vorlyn does not edit your CSS. After installing the theme, add this line to your main CSS file yourself, after your Tailwind import:

```css
@import "./vorlyn-theme.css";
```

If you already use shadcn/ui and have its theme variables, you do not need this item. `vorlyn init` looks for existing theme variables in `src/index.css`, `src/App.css`, `src/app/globals.css`, `app/globals.css` and `styles/globals.css`, and skips the theme step when it finds them.

The theme is based on the shadcn/ui neutral theme (MIT License).

## Configuration

Vorlyn stores project-specific configuration in `vorlyn.json`.

| Key       | Default | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| `baseDir` | `src`   | Base directory where files are installed                |
| `alias`   | `@/`    | Import alias rewritten inside installed files           |

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

## Working with shadcn/ui

Vorlyn components and shadcn/ui components share a similar structure but are built on different primitives (Base UI vs Radix). Avoid installing both into the same `components/ui` folder: running `shadcn add` could overwrite Vorlyn's files. If you want to use both, give one of them a separate base directory.

## Updating installed files

Running `vorlyn add` again for an item you already installed will ask before overwriting its files. Anything you edited in those files is replaced if you confirm, so commit your changes first and review the diff afterwards.

## Update notifications

At most once every 24 hours, the CLI checks the npm registry for a newer version of `vorlyn` and prints a short notice with an upgrade command for the package manager it appears to have been installed with. This is a network request to `registry.npmjs.org` with a short timeout. Failures are ignored silently and never block the command. The time of the last check is stored in `~/.vorlyn/`.

There is currently no option to disable this check.

## Requirements

- Node.js >= 22
- Tailwind CSS v4 and the `@/` import alias (or the alias you configured) set up in your project.
- Theme CSS variables defined in your project (see [Theme](#theme)).
- Tested with pnpm on macOS and with bun. yarn and npm are supported in the code but not yet verified, and only a pnpm workspace has been tried.
- Vite projects are currently the primary tested environment.

Other frameworks and bundlers may work, but they are not currently verified as part of the supported workflow.

## Known limitations

- Some generated files are checked by your project's own TypeScript and ESLint settings, which can be stricter than Vorlyn's. For example, the default Vite ESLint setup may report a `react-refresh/only-export-components` warning for `button`.
- `lucide-react` is used directly for icons; swapping it for another icon library means editing the installed files.

## Registry

Vorlyn items are maintained in the `packages/react` package and are generated into the CLI registry.

The registry contains the source files, external npm dependencies, and internal Vorlyn registry dependencies required to install each item.

The CLI resolves registry dependencies recursively, so installing one item can automatically install the other Vorlyn items it depends on.

## Development

Vorlyn is a pnpm monorepo.

```text
packages/
├── cli/          # The vorlyn CLI
├── react/        # Source for the registry (private)
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

If your change affects the `vorlyn` CLI, `@vorlyn/utils`, or any item in `packages/react`, add a changeset describing it:

```bash
pnpm changeset
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT