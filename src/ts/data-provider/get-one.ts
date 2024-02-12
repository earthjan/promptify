import { Document, MetaParam, DataProviderMethod, DocumentId } from "./main";

/**
 * Interface for params of `getOne()` data provider
 */
export interface GetOneParams {
  id?: DocumentId;
  meta?: MetaParam;
}

/**
 * Interface for result of `getOne()` data provider
 */
export interface GetOneResult<TData extends Document = Document> {
  data: TData;
}

export type GetOne = DataProviderMethod<GetOneParams, GetOneResult>;
