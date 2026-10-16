import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster, TooltipProvider, registerAuthSync } from "@vorlyn/react";
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
registerAuthSync();

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
