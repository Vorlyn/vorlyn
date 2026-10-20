---
"vorlyn": minor
---

Add the API layer to the registry. `vorlyn add axios-instance` installs an Axios instance with token refresh and cross-tab logout, configured through `config/api-config.ts`; `vorlyn add api-client` adds a typed client on top of it; `vorlyn add react-query` adds TanStack Query hooks and a ready-made QueryClient. Edit `api-config.ts` to match your backend.
