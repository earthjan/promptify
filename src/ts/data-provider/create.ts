import { DocumentBase } from "@earthjan/promptify-types";
import { MetaParam } from "./param";
import { DataProviderMethod } from "./main";
/**
 * Interface for params of `create()` data provider
 */
export interface CreateParams<TData extends DocumentBase = any> {
  data: TData;
  meta?: MetaParam;
}
/**
 * Interface for result of `create()` data provider
 */
export interface CreateResult<TData extends DocumentBase = any> {
  data: TData;
}

export type Create = DataProviderMethod<CreateParams, CreateResult>;
