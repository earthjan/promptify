import { GetList } from "./get-list";

/**
 * Interface for the lowest level of database controller 
 */
export interface DataProvider {
    getList: GetList
}

/**
 * Type for the shapes of data provider methods
 */
export type DataProviderMethod<TParams, TResult> = (
    collection: string,
    params?: TParams
  ) => Promise<TResult>;