---
"vorlyn": minor
---

init now looks for the nearest parent folder with a package.json, creates vorlyn.json there and runs the alias and Tailwind checks against it. It stops with an error if no package.json is found.
