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
  if (data instanceof FormData) {
    const resolvedUrl = typeof url === "function" ? url(data) : url;
    const payload = new FormData();
    for (const [key, value] of data.entries()) {
      if (key !== "id") payload.append(key, value);
    }
    return method(resolvedUrl, payload, config);
  }
  const resolvedUrl = typeof url === "function" ? url(data) : url;
  const { id, ...rest } = data as Record<string, unknown>;
  const payload = typeof url === "function" ? rest : data;
  return method(resolvedUrl, payload, config);
};
