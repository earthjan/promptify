import { GetOne, GetList, Create, Update } from "./main";

/**
 * Interface for the lowest level of database controller
 */
export interface DataProvider {
  getList: GetList;
  getOne: GetOne;
  create: Create;
  update: Update;
}

/**
 * Type for the shapes of data provider methods
 */
export type DataProviderMethod<TParams, TResult> = (
  collection: string,
  params?: TParams
) => Promise<TResult>;
