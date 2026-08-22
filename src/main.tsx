import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Toaster } from "./components/ui/toast.tsx";
import { env } from "./config/env.ts";
import { showInfoToast } from "./components/shared/toast/index.ts";

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
      refetchOnReconnect: true
    },
  },
});

window.addEventListener("storage", (event) => {
  if (event.key === env.VITE_AUTH_TOKEN_SECRET && event.newValue === null) {
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
