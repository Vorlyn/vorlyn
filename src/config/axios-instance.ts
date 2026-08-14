import axios, { type AxiosPromise } from "axios";
import { env } from "./env";
import {
  getLocalStorage,
  removeLocalStorageItem,
  setLocalStorage,
} from "@/utils/storage-utils";
import { showErrorSonner } from "@/components/shared/sonner";

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
    let isRefreshEndpoint = error.config.url.includes("refresh");
    if (!error.response) {
      showErrorSonner({
        message: "Network Error",
        description: "Please check your internet connection and try again.",
      });

      return Promise.reject(error);
    }
    if (error.response.status === 401 && isRefreshEndpoint) {
      removeLocalStorageItem(env.VITE_AUTH_TOKEN_SECRET);

      return Promise.reject(error);
    }
    if (error.response.status === 401 && !isRefreshEndpoint) {
      try {
        if (!refreshPromise) {
          refreshPromise = axiosInstance.get("refresh_api").finally(() => {
            refreshPromise = null;
          });
        }
        const newToken = await refreshPromise;
        if (newToken) {
          const token = newToken.data?.payload?.access_token;
          setLocalStorage(env.VITE_AUTH_TOKEN_SECRET, token);
          error.config.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(error.config);
        }
      } catch {
        showErrorSonner({
          message: error.message || "Something went wrong!",
        });
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
