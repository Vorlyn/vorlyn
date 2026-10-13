import axios from "axios";
import { getLocalStorage } from "@vorlyn/utils";

export class SessionExpiredError extends Error {
  constructor(message = "Session expired") {
    super(message);
    this.name = "SessionExpiredError";
  }
}

interface RefreshStrategyOptions {
  baseURL: string;
  refreshPath: string;
  timeoutMs: number;
  extractAccessToken: (body: unknown) => string | undefined;
}

const readAccessToken = (
  body: unknown,
  extractAccessToken: RefreshStrategyOptions["extractAccessToken"],
): string => {
  const token = extractAccessToken(body);
  if (!token) {
    throw new Error("Refresh response did not contain an access token");
  }
  return token;
};

export const tokenBasedRefreshStrategy =
  (options: RefreshStrategyOptions & { refreshTokenKey: string }) =>
  async (): Promise<string> => {
    const refreshToken = getLocalStorage<string>(options.refreshTokenKey);
    if (!refreshToken) {
      throw new SessionExpiredError("No refresh token available");
    }
    const response = await axios.post<unknown>(
      options.refreshPath,
      { refresh_token: refreshToken },
      { baseURL: options.baseURL, timeout: options.timeoutMs },
    );
    return readAccessToken(response.data, options.extractAccessToken);
  };

export const cookieBasedRefreshStrategy =
  (options: RefreshStrategyOptions) =>
  async (): Promise<string> => {
    const response = await axios.post<unknown>(options.refreshPath, undefined, {
      baseURL: options.baseURL,
      timeout: options.timeoutMs,
      withCredentials: true,
    });
    return readAccessToken(response.data, options.extractAccessToken);
  };