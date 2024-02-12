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

export const isDocument = (document: any): document is Document =>
  "id" in document;
