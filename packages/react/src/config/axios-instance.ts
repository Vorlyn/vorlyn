import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import {
  getLocalStorage,
  removeLocalStorageItem,
  setLocalStorage,
} from "@vorlyn/utils";
import { apiConfig } from "./api-config";
import { SessionExpiredError } from "./refresh-strategies";

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const NETWORK_ERROR_COOLDOWN_MS = 5000;

let refreshPromise: Promise<string> | null = null;
let lastNetworkErrorAt = 0;

const axiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeoutMs,
});

if (!apiConfig.baseURL) {
  console.warn(
    "[vorlyn] apiConfig.baseURL is empty. Set it in config/api-config.ts.",
  );
}

const normalizePath = (value: string): string =>
  value.replace(/\?.*$/, "").replace(/^\/+|\/+$/g, "");

const isPublicEndpoint = (url: string | undefined): boolean => {
  if (!url) return false;
  const path = normalizePath(url);
  return apiConfig.publicEndpoints.some((endpoint) => {
    const target = normalizePath(endpoint);
    return path === target || path.endsWith(`/${target}`);
  });
};

const isAuthRejection = (error: unknown): boolean =>
  axios.isAxiosError(error) &&
  (error.response?.status === 401 || error.response?.status === 403);

const endSession = (): void => {
  if (!getLocalStorage<string>(apiConfig.tokenKey)) return;
  removeLocalStorageItem(apiConfig.tokenKey);
  if (apiConfig.refreshTokenKey) {
    removeLocalStorageItem(apiConfig.refreshTokenKey);
  }
  apiConfig.onSessionExpired?.();
  if (window.location.pathname !== apiConfig.loginPath) {
    window.location.href = apiConfig.loginPath;
  }
};

const notifyNetworkError = (error: AxiosError): void => {
  const now = Date.now();
  if (now - lastNetworkErrorAt < NETWORK_ERROR_COOLDOWN_MS) return;
  lastNetworkErrorAt = now;
  apiConfig.onNetworkError?.(error);
};

const refreshOnce = (): Promise<string> => {
  const refresh = apiConfig.refreshAccessToken;
  if (!refresh) {
    return Promise.reject(
      new SessionExpiredError("This API has no token refresh"),
    );
  }
  refreshPromise ??= refresh().finally(() => {
    refreshPromise = null;
  });
  return refreshPromise;
};

axiosInstance.interceptors.request.use(
  (config) => {
    if (isPublicEndpoint(config.url)) return config;
    const token = getLocalStorage<string>(apiConfig.tokenKey);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    if (!error.response) {
      notifyNetworkError(error);
      return Promise.reject(error);
    }

    const originalRequest = error.config as RetryableRequestConfig | undefined;
    if (error.response.status !== 401 || !originalRequest) {
      return Promise.reject(error);
    }
    if (
      isPublicEndpoint(originalRequest.url) ||
      !originalRequest.headers.Authorization
    ) {
      return Promise.reject(error);
    }
    if (originalRequest._retry) {
      endSession();
      return Promise.reject(error);
    }
    originalRequest._retry = true;

    try {
      const token = await refreshOnce();
      setLocalStorage(apiConfig.tokenKey, token);
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      if (
        axios.isAxiosError(refreshError) &&
        refreshError.response?.status === 404
      ) {
        console.warn(
          "[vorlyn] The refresh endpoint returned 404. Check refreshPath in config/api-config.ts.",
        );
      }
      if (
        refreshError instanceof SessionExpiredError ||
        isAuthRejection(refreshError)
      ) {
        endSession();
      }
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
