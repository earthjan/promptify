import {
  DocumentSnapshot,
  collection as fsCollection,
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore as fs } from "../../../../firebase";

// TODO: `collection` must be a union type that comes from promptify-types
interface GetLastDocumentReferenceParams {
  collection: string;
  lastDocId: string | null;
}
interface GetLastDocumentReferenceResultObject {
  document: DocumentSnapshot | null;
}

type GetLastDocumentReferenceResult =
  GetLastDocumentReferenceResultObject | null;

  /**
   * Gets the last document snapshot. Useful for pagination
   */
export default async function getLastDocumentReference(
  params: GetLastDocumentReferenceParams
): Promise<GetLastDocumentReferenceResult> {
  const { collection, lastDocId } = params;

  if (!lastDocId) {
    return null;
  }

  const lastDocRef = doc(fsCollection(fs, collection), lastDocId);
  const lastDocSnapshot = await getDoc(lastDocRef);

  return lastDocSnapshot.exists()
    ? {
        document: lastDocSnapshot,
      }
    : null;
}
