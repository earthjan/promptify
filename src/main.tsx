import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import routes from "./app-config/routes.ts";
import App from "./App.tsx";
import ProtectedRoute from "./components/organisms/ProtectedRoute.tsx";
import defaultTheme from "./theme/defaultTheme.ts";
import "./index.css";
import { Login } from "./pages/public/main.ts";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: routes.main,
            element: <div>Test</div>,
          },
        ],
      },
      { path: "/", element: <Login /> },
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
