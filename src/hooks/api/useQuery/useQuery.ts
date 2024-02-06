import {
  useQuery as useQueryTanStack,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { Error } from "../../../ts/error-center/main";

/**
 *  Wraps tanstack useQuery to implement global settings..
 */
export default function useQuery<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData
>(
  useQueryOptions: UseQueryOptions<TQueryFnData, TError, TData>
): UseQueryResult<TData, TError> {
  return useQueryTanStack<TQueryFnData, TError, TData>({
    staleTime: 5000,
    refetchOnMount: false,
    ...useQueryOptions,
  });
}
