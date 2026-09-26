import { isAxiosError, type AxiosRequestConfig } from "axios";
import axiosInstance from "./axios-instance";
import { ApiError } from "./api-error";

interface ApiEnvelop<T> {
  payload: T;
}

interface ApiErrorPayload {
  message?: string;
}

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error.code === "ERR_CANCELED") {
      throw error;
    }

    const status = error.response?.status;
    const data = error.response?.data as ApiErrorPayload | undefined;
    const message = data?.message;

    throw new ApiError(message ?? "Something went wrong", status);
  }
  throw new Error("Unexpected error");
};

export const apiClient = {
  get: async <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
    params = {},
  ): Promise<TResponse> => {
    try {
      const mergeConfig = {
        ...config,
        params,
      };
      const response = await axiosInstance.get<ApiEnvelop<TResponse>>(
        url,
        mergeConfig,
      );
      return response.data.payload;
    } catch (error) {
      return handleError(error);
    }
  },
  post: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.post<ApiEnvelop<TResponse>>(
        url,
        data,
        config,
      );
      return response.data.payload;
    } catch (error) {
      return handleError(error);
    }
  },
  put: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.put<ApiEnvelop<TResponse>>(
        url,
        data,
        config,
      );
      return response.data.payload;
    } catch (error) {
      return handleError(error);
    }
  },
  patch: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.patch<ApiEnvelop<TResponse>>(
        url,
        data,
        config,
      );
      return response.data.payload;
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.delete<ApiEnvelop<TResponse>>(
        url,
        config,
      );
      return response.data.payload;
    } catch (error) {
      return handleError(error);
    }
  },
};
