import { DocumentBase } from "@earthjan/promptify-types";

type DocumentBaseKeys = Record<keyof DocumentBase, keyof DocumentBase>;

/**
 * Represents the keys of document base
 */
// TODO: promptify-types can encapsulate this
export const documentBaseKeys: DocumentBaseKeys = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  id: "id",
};
