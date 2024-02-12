import {
  doc,
  getDoc,
  updateDoc,
  collection as fsCollection,
} from "firebase/firestore";
import {
  DataProvider,
  Document,
  isDocument,
} from "../../../../ts/data-provider/main";
import { firestore as fs } from "../../../firebase";
import { documentBaseKeys } from "../../../../ts/promptify-types/document";
import { dataProviderUtils, timestamp } from "../../../../utils/main";
import { documentConverter } from "../../utils/main";

// TODO: Handle edge case to prevent the client in overriding `id` and `createdAt` with `delete`
// TODO: Unit test this with firestore emulator
const update: DataProvider["update"] = async (collection, params) => {
  const { id, data } = params ?? {};

  if (!id)
    throw new Error(
      "Error Document Update: make sure you're specifying the document id."
    );

  if (
    data &&
    (documentBaseKeys.id in data || documentBaseKeys.createdAt in data)
  )
    throw new Error(
      "Error Document Update: make sure you're only specifying fields that can updated."
    );

  const docRef = doc(fs, collection, id).withConverter(documentConverter);
  await updateDoc(docRef, {
    ...data,
    [documentBaseKeys.updatedAt]: timestamp.now(),
  });

  const updatedDoc = (await getDoc(docRef)).data();

  if (updatedDoc === undefined)
    console.error("Unable to return the updated document", data);

  let result = dataProviderUtils.generateEmptyDoc();

  return {
    data: updatedDoc ?? result,
  };
};

export default update;
