import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApplicationRouter } from "./router/application-router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// @ts-ignore
import "./main.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApplicationRouter />
    </QueryClientProvider>
  </StrictMode>,
);
