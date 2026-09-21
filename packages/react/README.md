# Vorlyn React Components

Vorlyn's core React component library — accessible, customizable components distributed via a CLI registry rather than a traditional npm package.

## Status

Work in progress.

Vorlyn components are distributed as editable source code
through the `vorlyn` CLI rather than as a traditional
component npm package.

The CLI is currently available for local development and
has not yet been published to npm.

## What & Why

Vorlyn distributes component source code directly into your
project through a CLI registry.

Instead of consuming every component as a runtime dependency
from a traditional component package, you add the source files
you need and can customize them within your own codebase.

This approach gives you more direct control over component
implementation, styling, and behavior.

## Installation

```bash
npx vorlyn init
npx vorlyn add button
```

> Note: the CLI is not yet published to npm. Until then, this works via a local development link (`pnpm link --global`).

## Usage

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}
```

The installed file paths depend on your `vorlyn.json`
configuration.

The configured alias must also be supported by your project's
TypeScript and bundler configuration.

## Available Components

The registry currently includes reusable React components
that can be installed through the Vorlyn CLI.

The component list will be generated automatically as the
documentation workflow evolves.

## Configuration

The CLI reads a `vorlyn.json` file (created by `vorlyn init`):

| Key       | Default | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| `baseDir` | `src`   | Base directory where components are installed           |
| `alias`   | `@/`    | Import alias rewritten inside installed component files |

## Requirements

- React 19.2.0 was used during development and testing.
- Vite projects are currently tested.
- Other frameworks and bundlers have not yet been verified.

## Known Limitations

- `navigation-menu` currently depends directly on `react-router-dom` and is not yet router-agnostic
- The `vorlyn` CLI package is not yet published to npm

## Contributing

Vorlyn is currently maintained solo, and this project is still actively evolving. Contributions, issues, and suggestions are welcome.

This is a pnpm monorepo:

- `packages/react` — this package, the source of all UI components
- `packages/cli` — the `vorlyn` CLI (registry generator + `init`/`add` commands)
- `packages/utils` — `@vorlyn/utils`, a small published npm package
- `apps/playground` — a Vite app for testing components locally

To get started locally:

```bash
pnpm install
pnpm --filter playground dev
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT
