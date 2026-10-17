import type { AxiosRequestConfig } from "axios";

export const buildAndSend = async <TResponse, TData>(
  method: (
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ) => Promise<TResponse>,
  url: string | ((variables: TData) => string),
  data: TData,
  config: AxiosRequestConfig,
): Promise<TResponse> => {
  const resolvedUrl = typeof url === "function" ? url(data) : url;

  if (data instanceof FormData) {
    const payload = new FormData();
    data.forEach((value, key) => {
      if (key !== "id") payload.append(key, value);
    });
    return method(resolvedUrl, payload, config);
  }

  if (typeof url !== "function") {
    return method(resolvedUrl, data, config);
  }

  const body = Object.fromEntries(
    Object.entries(data as Record<string, unknown>).filter(
      ([key]) => key !== "id",
    ),
  );
  return method(resolvedUrl, body, config);
};