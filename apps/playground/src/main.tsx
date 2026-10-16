import { QueryClientProvider } from "@tanstack/react-query";
import {
  apiConfig,
  Toaster,
  TooltipProvider,
  registerAuthSync,
  showErrorToast,
  showInfoToast,
  queryClient,
} from "@vorlyn/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./dev-tools";
import App from "./App";

apiConfig.onNetworkError = () =>
  showErrorToast({
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
