# @vorlyn/utils

Shared utility functions for the [Vorlyn](https://github.com/vorlyn/vorlyn) ecosystem — a set of small, dependency-light helpers used across Vorlyn's components and packages.

## Installation

```bash
npm install @vorlyn/utils
```

## Usage

### `cn`

Merges class names using [`clsx`](https://github.com/lukeed/clsx) and resolves Tailwind CSS conflicts using [`tailwind-merge`](https://github.com/dcastil/tailwind-merge).

```ts
import { cn } from "@vorlyn/utils";

cn("px-2 py-1", isActive && "bg-primary", "px-4");
// => "py-1 bg-primary px-4"
```

### `setLocalStorage`

Saves a value to `localStorage`, serialized as JSON.

```ts
import { setLocalStorage } from "@vorlyn/utils";

setLocalStorage("theme", { mode: "dark" });
```

### `getLocalStorage`

Reads and parses a value from `localStorage`. Returns `null` if the key doesn't exist or parsing fails.

```ts
import { getLocalStorage } from "@vorlyn/utils";

const theme = getLocalStorage<{ mode: string }>("theme");
```

### `removeLocalStorageItem`

Removes a single key from `localStorage`.

```ts
import { removeLocalStorageItem } from "@vorlyn/utils";

removeLocalStorageItem("theme");
```

### `removeAllFromLocalStorage`

Clears all keys from `localStorage`.

```ts
import { removeAllFromLocalStorage } from "@vorlyn/utils";

removeAllFromLocalStorage();
```

> **Note:** The `localStorage`-based utilities rely on the browser `localStorage` API and are intended for use in browser/React environments, not Node.js runtimes.

## License

MIT © [Zohair Ajmal](https://github.com/vorlyn)

See [LICENSE](../../LICENSE) for details.