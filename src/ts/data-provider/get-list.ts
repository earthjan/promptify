import {
  Document,
  FilterParam,
  MetaParam,
  PaginationParam,
  SortParam,
  DataProviderMethod,
} from "./main";

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
export interface GetListResult<TData extends Document[] = Document[]> {
  total: number;
  data: TData;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export type GetList = DataProviderMethod<GetListParams, GetListResult>;
