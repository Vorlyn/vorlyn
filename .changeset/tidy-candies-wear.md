---
"vorlyn": minor
---

Replace `showCloseControls` on `Dialog` with `showCloseButton`, which only controls the X button. The footer now renders when `cancel` or `confirm` is provided. Also keeps the default "Cancel" label when `cancel.label` is undefined.
