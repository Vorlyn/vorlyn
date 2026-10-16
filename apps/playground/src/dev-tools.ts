// Temporary test helpers. Do not commit.
import { apiClient, apiConfig } from "@vorlyn/react";

const api = "http://localhost:4000";

const post = (path: string, body?: unknown) =>
  fetch(api + path, { method: "POST", body: JSON.stringify(body ?? {}) });

const login = async () => {
  const response = await post("/auth/login");
  const { payload } = (await response.json()) as {
    payload: { access_token: string; refresh_token: string };
  };
  localStorage.setItem(apiConfig.tokenKey, JSON.stringify(payload.access_token));
  if (apiConfig.refreshTokenKey) {
    localStorage.setItem(
      apiConfig.refreshTokenKey,
      JSON.stringify(payload.refresh_token),
    );
  }
};

const stats = async (): Promise<unknown> => {
  const response = await fetch(api + "/__stats");
  return (await response.json()) as unknown;
};

Object.assign(window, {
  apiClient,
  login,
  stats,
  expire: () => post("/__expire"),
  mode: (m: Record<string, unknown>) => post("/__mode", m),
  reset: () => post("/__reset"),
});