# vorlyn

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
