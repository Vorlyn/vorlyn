import { apiClient } from "@/config/api-client";
import {
  useMutation,
  useQuery,
  useSuspenseQuery,
  type UseMutationOptions,
  type UseQueryOptions,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import { buildAndSend } from "./tanstack-query.utils";

export const useGetQuery = <TData = unknown>(
  key: string[],
  url: string,
  config: AxiosRequestConfig = {},
  params = {},
  options: Omit<
    UseQueryOptions<TData, Error, TData>,
    "queryKey" | "queryFn"
  > = {},
) => {
  const query = useQuery({
    queryKey: [...key, url, params],
    queryFn: async (context): Promise<TData> => {
      const response = await apiClient.get<TData>(
        url,
        { ...config, signal: context.signal },
        params,
      );
      return response;
    },
    ...options,
  });

  return query;
};

export const useGetSuspenseQuery = <TData = unknown>(
  key: string[],
  url: string,
  config: AxiosRequestConfig = {},
  params = {},
  options: Omit<
    UseSuspenseQueryOptions<TData, Error, TData>,
    "queryKey" | "queryFn"
  > = {},
) => {
  const query = useSuspenseQuery({
    queryKey: [...key, url, params],
    queryFn: async (context): Promise<TData> => {
      const response = await apiClient.get<TData>(
        url,
        { ...config, signal: context.signal },
        params,
      );
      return response;
    },
    ...options,
  });

  return query;
};

export const useGetMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: async (params: TData) => {
      const response = await apiClient.get<TResponse>(
        url,
        config,
        params || {},
      );
      return response;
    },
    ...options,
  });

  return mutation;
};

export const usePostMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const response = await apiClient.post<TResponse>(url, data, config);
      return response;
    },
    ...options,
  });

  return mutation;
};

export const usePutMutation = <
  TData extends Record<string, unknown> = Record<string, unknown>,
  TResponse = unknown,
>(
  key: string,
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: (data: TData) =>
      buildAndSend(apiClient.put<TResponse>, url, data, config),
    ...options,
  });

  return mutation;
};

export const usePatchMutation = <
  TData extends Record<string, unknown> = Record<string, unknown>,
  TResponse = unknown,
>(
  key: string,
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: (data: TData) =>
      buildAndSend(apiClient.patch<TResponse>, url, data, config),
    ...options,
  });

  return mutation;
};

export const useDeleteMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options?: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  >,
) => {
  return useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: (data: TData) => {
      const resolvedUrl = typeof url === "function" ? url(data) : url;
      if (typeof url === "function") {
        return apiClient.delete<TResponse>(resolvedUrl, config);
      }
      return apiClient.delete<TResponse>(resolvedUrl, { ...config, data });
    },
    ...options,
  });
};
