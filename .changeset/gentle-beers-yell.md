---
"vorlyn": patch
---

Fix Label error text color: it used a non-existent destructive-500 token, so it now uses the standard destructive token. Fix the Radar chart fill fallback, which pointed at an undefined --color-desktop variable and now uses the series color from the chart config, falling back to the chart theme colors.
