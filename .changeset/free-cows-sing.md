---
"vorlyn": minor
---

`Dialog` now links its confirm button to a `FormProvider` rendered inside it automatically, so submit buttons in the footer work without passing an `id`. An explicit `id` on `FormProvider` and `form` on `confirm` still take precedence.
