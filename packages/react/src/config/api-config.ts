import type { AxiosError } from "axios";
import { tokenBasedRefreshStrategy } from "./refresh-strategies";

export interface ApiConfig {
  baseURL: string;
  timeoutMs: number;
  tokenKey: string;
  refreshTokenKey?: string;
  loginPath: string;
  publicEndpoints: string[];
  refreshAccessToken?: () => Promise<string>;
  extractResponse: (body: unknown) => unknown;
  extractErrorMessage: (body: unknown) => string | undefined;
  onNetworkError?: (error: AxiosError) => void;
  onSessionExpired?: () => void;
}

const baseURL = import.meta.env.VITE_API_BASE_URL as string;
const timeoutMs = 15000;
const refreshTokenKey = "refresh_token";

const extractAccessToken = (body: unknown): string | undefined =>
  (body as { payload?: { access_token?: string } } | undefined)?.payload
    ?.access_token;

export const apiConfig: ApiConfig = {
  baseURL,
  timeoutMs,
  tokenKey: "access_token",
  refreshTokenKey,
  loginPath: "/auth/login",
  publicEndpoints: ["/auth/login", "/auth/register", "/auth/forgot-password"],
  extractResponse: (body) =>
    body !== null && typeof body === "object" && "payload" in body
      ? body.payload
      : body,
  extractErrorMessage: (body) =>
    (body as { message?: string } | undefined)?.message,
  refreshAccessToken: tokenBasedRefreshStrategy({
    baseURL,
    timeoutMs,
    refreshPath: "/auth/refresh",
    refreshTokenKey,
    extractAccessToken,
  }),
  onNetworkError: () => console.warn("Network error: check your connection."),
  onSessionExpired: () => console.info("Session expired."),
};
