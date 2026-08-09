import axios from "axios";
import { env } from "./env";
import { getLocalStorage, removeLocalStorageItem } from "@/utils/storage-utils";
import { showErrorSonner } from "@/components/shared/sonner";

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

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeLocalStorageItem(env.VITE_AUTH_TOKEN_SECRET);
    }
    if (!error.response) {
      showErrorSonner({
        message: "Network Error",
        description: "Please check your internet connection and try again.",
      });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
