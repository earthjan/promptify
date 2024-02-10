import { DocumentBase, DocumentId } from "@earthjan/promptify-types";
import { DataProviderMethod } from "./data-provider-methods";
import { MetaParam } from "./param";

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
export interface GetOneResult<TData extends DocumentBase = any> {
  data: TData;
}

export type GetOne = DataProviderMethod<GetOneParams, GetOneResult>;
