import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export interface IQueryClientProps {
  children: any;
  enableDevTool?: boolean;
}

export default function QueryClientContext({
  enableDevTool = false,
  children,
}: IQueryClientProps) {
  const currEnv = import.meta.env.VITE_ENVIRONMENT;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {enableDevTool && currEnv === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
