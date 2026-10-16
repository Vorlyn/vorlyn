import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { ApiError } from "./api-error";

const MAX_RETRIES = 2;

const shouldRetry = (failureCount: number, error: Error): boolean => {
  if (axios.isCancel(error)) return false;
  if (error instanceof ApiError && error.status === 401) return false;
  return failureCount < MAX_RETRIES;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetry,
      retryDelay: 3000,
      staleTime: 5 * 60 * 1000,
      gcTime: 60 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: false,
      gcTime: 60 * 60 * 1000,
    },
  },
});