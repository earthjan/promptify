import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import routes from "./app-config/routes/routes.ts";
import App from "./App.tsx";
import ProtectedRoute from "./components/organisms/ProtectedRoute.tsx";
import defaultTheme from "./theme/defaultTheme.ts";
import "./index.css";
import { Login } from "./pages/public/main.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PublicRoute from "./components/organisms/PublicRoute.tsx";
import PromptCreate from "./components/templates/PromptCreate/PromptCreate.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: routes.main,
            element: <PromptCreate />,
          },
          {
            path: routes.default,
            element: <div style={{ color: "white" }}>Page not found..</div>,
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          { path: routes.login, element: <Login /> },
          { path: "*", element: <Login /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
