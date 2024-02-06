import { useState } from "react";
import { UseStatusResult } from "./ts/use-status";
import { StatusType } from "../../ts/api/main";
import { Error } from "../../ts/error-center/error";

/**
 * Controller to manage status
 */
export default function useStatus(): UseStatusResult {
  const [status, setStatusState] = useState<StatusType>("idle");
  const [error, setError] = useState<UseStatusResult["error"]>(undefined);

  const setStatus = (status: StatusType, error?: Error) => {
    setStatusState(status);
    if (error) setError(error);
  };

  return {
    status,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    error,
    setStatus,
  };
}
