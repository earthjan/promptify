import {
  useMutation as useMutationTanStack,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { Error } from "../../../ts/error-center/main";

/**
 *  Wraps TanStack useMutation to implement global settings.
 */
export default function useMutation<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown
>(
  useMutationOptions: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  const mutation = useMutationTanStack<TData, TError, TVariables, TContext>(
    useMutationOptions
  );

  return mutation;
}
