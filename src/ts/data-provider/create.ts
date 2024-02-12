import { MetaParam } from "./param";
import { DataProviderMethod, Document } from "./main";
/**
 * Interface for params of `create()` data provider
 */
export interface CreateParams<TData extends Document = Document> {
  data: TData;
  meta?: MetaParam;
}

/**
 * Interface for result of `create()` data provider
 */
export interface CreateResult<TData extends Document = Document> {
  data: TData;
}

export type Create = DataProviderMethod<CreateParams, CreateResult>;
