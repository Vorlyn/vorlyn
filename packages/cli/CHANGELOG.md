# vorlyn

## 0.2.1

### Patch Changes

- e408a8a: Fix `vorlyn add` not stopping when no `vorlyn.json` is found. The check introduced in 0.2.0 never triggered, so `add` kept writing files with the default config. It now stops with an error and asks you to run `vorlyn init` first.

## 0.2.0

### Minor Changes

- 63b6c54: init now looks for the nearest parent folder with a package.json, creates vorlyn.json there and runs the alias and Tailwind checks against it. It stops with an error if no package.json is found.
- 77db277: Add now stops with a clear error when no vorlyn.json is found instead of writing files with the default config relative to the current folder.

## 0.1.13

### Patch Changes

- 5567c65: Show overwritten and created files separately and list dependencies already in package.json
- 6a53cca: Warn after `vorlyn init` and `vorlyn add` when Tailwind CSS is missing from your package.json or older than v4. Vorlyn components use Tailwind v4 syntax and render unstyled without it.

## 0.1.12

### Patch Changes

- aa02959: keep button disabled while loading when disabled is false

## 0.1.11

### Patch Changes

- 803a2c1: Detect the CLI's own package manager for the update notice's upgrade command

## 0.1.10

### Patch Changes

- cb3b1a7: fix: improve dependency install step in vorlyn add
- cb3b1a7: fix: improve dependency install step in vorlyn add

## 0.1.9

### Patch Changes

- ce3870c: Fix existing-file check to use project root instead of cwd
