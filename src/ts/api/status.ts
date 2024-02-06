import { Error } from "../error-center/error";

export type StatusType = "idle" | "loading" | "success" | "error";

export interface Status<TError = Error> {
  status: StatusType;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  error?: TError;
}
