import { DocumentBase, DocumentId } from "@earthjan/promptify-types";
import { MetaParam } from "./param";
import { DataProviderMethod } from "./main";

/**
 * Interface for params of `update()` data provider
 */
export interface UpdateParams<TData extends DocumentBase = any> {
  id: DocumentId;
  data: Partial<TData>;
  previousData: TData;
  meta?: MetaParam;
}
/**
 * Interface for result of `update()` data provider
 */
export interface UpdateResult<TData extends DocumentBase = any> {
  data: TData;
}

export type Update = DataProviderMethod<UpdateParams, UpdateResult>;
