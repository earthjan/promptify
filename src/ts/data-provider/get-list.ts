import { DataProviderMethod } from "./data-provider-methods";
import { FilterParam, MetaParam, PaginationParam, SortParam } from "./param";
import { DocumentBase } from "@earthjan/promptify-types";

/**
 * Interface for params of `getList()` data provider
 */
export interface GetListParams {
  pagination?: PaginationParam;
  filter?: FilterParam;
  meta?: MetaParam;
  sort?: SortParam;
}

/**
 * Interface for result of `getList()` data provider
 */
export interface GetListResult<TData extends DocumentBase[] = any[]> {
  total: number;
  data: TData;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export type GetList = DataProviderMethod<GetListParams, GetListResult>;
