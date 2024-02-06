import authProvider from "../../../app-config/authProvider/authProvider";
import { mutation_LoginWithGoogle } from "../../../query/authentication/keys/main";
import { StatusType } from "../../../ts/api/status";
import useMutation from "../../api/useMutation/useMutation";
import { UseLoginResult } from "./types/use-login";

export default function useLogin(): UseLoginResult {
  const { data, mutateAsync, status, isPending, isSuccess, isError, error } =
    useMutation({
      mutationKey: mutation_LoginWithGoogle.login(),
      mutationFn: authProvider.login,
    });

  let _status: StatusType = "idle";

  if (status === "idle") _status = "idle";
  if (status === "pending") _status = "loading";
  if (status === "success") _status = "success";
  if (status === "error") _status = "error";

  return {
    data,
    login: async () => await mutateAsync(),
    status: _status,
    isLoading: isPending,
    isSuccess,
    isError,
    error: error ?? undefined,
  };
}
