# Vorlyn React Components

Vorlyn's core React component library — customizable components built on Base UI primitives, distributed via a CLI registry rather than a traditional npm package.

## Status

Work in progress.

Vorlyn components are distributed as editable source code through the `vorlyn` CLI rather than as a traditional component npm package.

The CLI is published on npm as `vorlyn`. This package (`@vorlyn/react`) is private and is not installed from npm; it is the source of the components in the registry.

## What & Why

Vorlyn distributes component source code directly into your project through a CLI registry.

Instead of consuming every component as a runtime dependency from a traditional component package, you add the source files you need and can customize them within your own codebase.

This approach gives you more direct control over component implementation, styling, and behavior.

## Installation

```bash
npx vorlyn init
npx vorlyn add button
```

`pnpm dlx vorlyn ...` and `bunx vorlyn ...` work the same way. See the [CLI README](../cli/README.md) for all commands.

## Usage

```tsx
import { Button } from "@/components/shared/button";

export function Example() {
  return <Button label="Click me" />;
}
```

The installed file paths depend on your `vorlyn.json` configuration. The examples assume `baseDir: src` and the default alias `@/`.

The configured alias must also be supported by your project's TypeScript and bundler configuration.

Import components from `components/shared/*`. The files in `components/ui/*` are the lower-level primitives (based on Base UI) that the shared components wrap. They are installed automatically as dependencies and are not meant to be imported directly.

Each shared component declares its props in a `*.types.ts` file next to it (for example `components/shared/button/button.types.ts`).

## Router-agnostic links

`navigation-menu` does not depend on any router. To use client-side navigation, pass a `renderLink` function that returns your router's link element:

```tsx
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/shared/navigation-menu";

const options = [
  {
    id: "docs",
    title: "Docs",
    description: "Guides and reference",
    href: "/docs",
  },
];

export function Nav() {
  return (
    <NavigationMenu
      trigger={<button>Menu</button>}
      options={options}
      renderLink={({ href, className, children }) => (
        <Link to={href} className={className}>
          {children}
        </Link>
      )}
    />
  );
}
```

Tested with React Router's `Link`. The returned element should forward refs and extra props, which `Link` does.

## Available Components

The registry currently includes around 49 components. Until the documentation site exists, browse `src/components/shared/` in this package for the current list.

## Configuration

See the [CLI README](../cli/README.md) for the `vorlyn.json` options.

## Requirements

- React 19.2.0 was used during development and testing.
- Vite projects are currently tested.
- Other frameworks and bundlers have not yet been verified.
- Tailwind CSS (the components use Tailwind v4 syntax) with theme CSS variables such as `--muted`, `--popover`, `--foreground` and `--ring` defined in your project. Without them the components render unstyled.

See the [CLI README](../cli/README.md) for the tested package managers.

## Known Limitations

- `navigation-menu` renders plain `<a>` links by default (full page reload). Pass `renderLink` to use your router's link component.

## Contributing

Vorlyn is currently maintained solo, and this project is still actively evolving. Contributions, issues, and suggestions are welcome.

This is a pnpm monorepo:

- `packages/react` — this package, the source of all UI components
- `packages/cli` — the `vorlyn` CLI (registry generator + `init`/`add` commands)
- `packages/utils` — `@vorlyn/utils`, a small published npm package
- `packages/react-query` — `@vorlyn/react-query`, the Axios API layer and TanStack Query helpers (private, not yet published)
- `apps/playground` — a Vite app for testing components locally

To get started locally:

```bash
pnpm install
pnpm --filter @vorlyn/playground dev
```

Changes in `packages/react` only reach users through a `vorlyn` CLI release, so add a changeset for `vorlyn` when you change a component:

```bash
pnpm changeset
```

A dedicated contribution guide will be added as the project stabilizes.

## License

MIT