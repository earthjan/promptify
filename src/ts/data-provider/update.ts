import { DataProviderMethod, Document, DocumentId, MetaParam } from "./main";

/**
 * Interface for params of `update()` data provider
 */
export interface UpdateParams<TData extends Document = Document> {
  id: DocumentId;
  data: Partial<TData>;
  previousData: TData;
}
/**
 * Interface for result of `update()` data provider
 */
export interface UpdateResult<TData extends Document = Document> {
  data: TData;
}

export type Update = DataProviderMethod<UpdateParams, UpdateResult>;
