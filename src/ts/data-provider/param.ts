import { DocumentId } from "./main";

/**
 * Type for data set pagination
 */
export interface PaginationParam {
  pageSize: number;
  page: number;
}

/**
 * Type for individual data set filter
 */
export interface FilterObjectParam {
  attribute: string;
  value: string | number | boolean | string[] | number[];
  asSearch?: boolean;
  asDefault?: boolean;
}
/**
 * Type for an array of data set filters
 */
export type FilterArrayParam = FilterObjectParam[];
/**
 * Type for data set filtering
 */
export type FilterParam = FilterObjectParam | FilterArrayParam;

/**
 * Type for data provider which MetaObjectParam is set to
 */
export type DataProviderType = "getList" | "create" | "getOne";
/**
 * Type for data provider meta param
 */
export interface MetaObjectParam {
  /**
   * Indicates what data provider this method should process the meta.
   *
   * For example, when specifying the `customLookUp`, you should indicate the intended data provider that will work with look up criteria, such as `getOne`.
   */
  dataProviderType?: DataProviderType;
  /**
   * For custom query when working with fetcher data providers.
   */
  customLookUp?: FilterParam;
  /**
   * For custom document id when working with documents or attributes with ids.
   */
  customDocumentId?: string;
  /**
   * For implementing pagination, helping to determine what document set to skip.
   */
  lastDocumentId: DocumentId;
}
export type MetaParam = MetaObjectParam | undefined;
/**
 * Type for data set sorting
 */
export interface SortParam {
  field: string;
  order: "asc" | "desc";
}
