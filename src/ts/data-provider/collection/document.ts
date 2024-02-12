/**
 * Type for the app's default document id.
 */
export type DocumentId = string;
/**
 * Type for the app's document type.
 */
export interface Document<TId = DocumentId> extends Record<string, any> {
  id: TId;
}
/**
 * Type for app's document timestamps
 */
export interface DocumentTimeStamp {
  createdAt: Date;
  updatedAt: Date;
}

export const isDocument = (document: any): document is Document =>
  "id" in document;
