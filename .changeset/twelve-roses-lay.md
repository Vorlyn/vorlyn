---
"vorlyn": patch
---

Fix `vorlyn add` not stopping when no `vorlyn.json` is found. The check introduced in 0.2.0 never triggered, so `add` kept writing files with the default config. It now stops with an error and asks you to run `vorlyn init` first.
