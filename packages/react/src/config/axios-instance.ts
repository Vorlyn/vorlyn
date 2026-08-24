import axios, { type AxiosPromise, type AxiosRequestConfig } from "axios";
import { env } from "./env";
import { showErrorToast } from "@/components/shared/toast";
import {
  getLocalStorage,
  removeLocalStorageItem,
  setLocalStorage,
} from "@vorlyn/utils";

interface RetryableRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

let refreshPromise: AxiosPromise | null = null;

const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage(env.VITE_AUTH_TOKEN_SECRET);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === "ERR_CANCELED") {
      return Promise.reject(error);
    }
    if (!error.response) {
      showErrorToast({
        message: "Network Error",
        description: "Please check your internet connection and try again.",
      });

      return Promise.reject(error);
    }
    const isRefreshEndpoint = error.config?.url?.includes("refresh") ?? false;
    if (error.response.status === 401 && isRefreshEndpoint) {
      removeLocalStorageItem(env.VITE_AUTH_TOKEN_SECRET);

      return Promise.reject(error);
    }
    const originalRequest = error.config as RetryableRequestConfig;
    if (error.response.status === 401 && !isRefreshEndpoint) {
      if (originalRequest._retry) {
        removeLocalStorageItem(env.VITE_AUTH_TOKEN_SECRET);

        return Promise.reject(error);
      }

      originalRequest._retry = true;
      try {
        if (!refreshPromise) {
          refreshPromise = axiosInstance.get("refresh_api").finally(() => {
            refreshPromise = null;
          });
        }
        const newToken = await refreshPromise;
        if (newToken) {
          const token = newToken.data?.payload?.access_token;

          if (!token) {
            throw new Error("Refresh response did not contain an access token");
          }

          setLocalStorage(env.VITE_AUTH_TOKEN_SECRET, token);

          originalRequest.headers = originalRequest.headers ?? {};
          originalRequest.headers.Authorization = `Bearer ${token}`;

          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        removeLocalStorageItem(env.VITE_AUTH_TOKEN_SECRET);
        showErrorToast({
          message: "Session expired. Please login again.",
        });
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
