import axios, {
  isAxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import axiosInstance from "./axios-instance";
import { apiConfig } from "./api-config";
import { ApiError } from "./api-error";

const handleError = (error: unknown): never => {
  if (isAxiosError(error)) {
    if (axios.isCancel(error)) {
      throw error;
    }
    const message = apiConfig.extractErrorMessage(error.response?.data);
    throw new ApiError(
      message ?? "Something went wrong",
      error.response?.status,
    );
  }
  throw new Error("Unexpected error", { cause: error });
};

const send = async <TResponse>(
  call: () => Promise<AxiosResponse<unknown>>,
): Promise<TResponse> => {
  try {
    const response = await call();
    return apiConfig.extractResponse(response.data) as TResponse;
  } catch (error) {
    return handleError(error);
  }
};

export const apiClient = {
  get: <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
    params: object = {},
  ): Promise<TResponse> =>
    send<TResponse>(() =>
      axiosInstance.get(url, {
        ...config,
        params: { ...(config.params as object | undefined), ...params },
      }),
    ),
  post: <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> =>
    send<TResponse>(() => axiosInstance.post(url, data, config)),
  put: <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> =>
    send<TResponse>(() => axiosInstance.put(url, data, config)),
  patch: <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> =>
    send<TResponse>(() => axiosInstance.patch(url, data, config)),
  delete: <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> =>
    send<TResponse>(() => axiosInstance.delete(url, config)),
};