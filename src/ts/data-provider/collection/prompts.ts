import { Identity } from "../../auth-provider/main";
import { Document, DocumentTimeStamp } from "../main";

/**
 * Type for prompt's field type
 */
export type FieldType = "string" | "number" | "code-block";
/**
 * Type for prompt's fields
 */
export interface Field {
  name: string;
  type: FieldType;
}
/**
 * Type for app's document prompt
 */
export interface Prompt extends Document, DocumentTimeStamp {
  title: string;
  prompt: string;
  author: Identity;
  fields: Field[];
}
