import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { apiConfig, showErrorToast, showInfoToast, Toaster, TooltipProvider } from "@vorlyn/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./dev-tools";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      gcTime: 60 * 60 * 1000,
    },
    queries: {
      retry: 2,
      retryDelay: 3000,
      staleTime: 5 * 60 * 1000,
      gcTime: 60 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

apiConfig.onNetworkError = () => showErrorToast({
    message: "Network Error",
    description: "Please check your internet connection and try again.",
  });
  apiConfig.onSessionExpired = () =>
  showInfoToast({ message: "Session expired. Please login again." });

window.addEventListener("storage", (event) => {
  if (event.key === apiConfig.tokenKey && event.newValue === null) {
    showInfoToast({
      message: "Your session has been expired!",
      description: "Please login again to continue your actions.",
    });
    window.location.href = "/auth/login";
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <App />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>,
);
