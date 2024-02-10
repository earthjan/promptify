import { doc, getDoc, setDoc } from "firebase/firestore";
import { DataProvider } from "../../../../ts/data-provider/main";
import baseData from "./utils/baseData";
import { firestore as fs } from "../../../firebase";

// TODO: Unit test this with firestore emulator
const create: DataProvider["create"] = async (collection, params) => {
  if (params === undefined)
    throw new Error(
      "Failed to Document Creation: make sure you're specifying new document's data"
    );

  const baseDataResult = baseData();

  const newDocRef = doc(fs, collection, baseDataResult.id);
  await setDoc(newDocRef, {
    ...params.data,
    ...baseDataResult,
  });
  const addedDoc = await getDoc(newDocRef);

  return {
    data: addedDoc.data(),
  };
};

export default create;
