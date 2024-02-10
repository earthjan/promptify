import { doc, getDoc, updateDoc } from "firebase/firestore";
import { DataProvider } from "../../../../ts/data-provider/main";
import { firestore as fs } from "../../../firebase";
import { documentBaseKeys } from "../../../../ts/promptify-types/document";
import { timestamp } from "../../../../utils/main";

// TODO: Handle edge case to prevent the client in overriding `id` and `createdAt` with `delete`
// TODO: Unit test this with firestore emulator
const update: DataProvider["update"] = async (collection, params) => {
  const { id, data, previousData, meta } = params ?? {};

  try {
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

    const docRef = doc(fs, collection);
    await updateDoc(docRef, {
      ...data,
      [documentBaseKeys.updatedAt]: timestamp.now(),
    });

    const updatedDoc = await getDoc(docRef);

    return {
      data: updatedDoc.data(),
    };
  } catch (error) {
    return {
      data: previousData,
    };
  }
};

export default update;
