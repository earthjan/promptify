import { useLocation } from "react-router-dom";
import authProvider from "../../../app-config/authProvider/authProvider";
import { useStatus } from "../../main";
import { UseCheckAuthResult } from "./types";
import { useState } from "react";

export default function useCheckAuth(): UseCheckAuthResult {
  const { setStatus, ...status } = useStatus();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const location = useLocation();

  const checkAuth = async () => {
    try {
      setStatus("loading");
      const result = await authProvider.checkAuth();
      setIsAuthenticated(result);
      setStatus("success");

      return result;
    } catch (error) {
      setStatus("error", {
        name: "Authentication Error",
        endpoint: location.pathname,
        message: "Troubled verifying authentication",
        code: 0,
      });
      setIsAuthenticated(false);
      return false;
    }
  };

  return { isAuthenticated, checkAuth, ...status };
}
