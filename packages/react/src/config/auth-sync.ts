import { apiConfig } from "./api-config";

const isTokenRemoved = (event: StorageEvent): boolean =>
  (event.key === null || event.key === apiConfig.tokenKey) &&
  event.newValue === null;

export const registerAuthSync = (): (() => void) => {
  const onStorage = (event: StorageEvent): void => {
    if (!isTokenRemoved(event)) return;
    apiConfig.onSessionExpired?.();
    if (window.location.pathname !== apiConfig.loginPath) {
      window.location.href = apiConfig.loginPath;
    }
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
};