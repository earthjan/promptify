import { doc, getDoc, setDoc } from "firebase/firestore";
import { DataProvider } from "../../../../ts/data-provider/main";
import baseData from "./utils/baseData";
import { firestore as fs } from "../../../firebase";
import documentConverter from "../../utils/documentConverter";
import { dataProviderUtils } from "../../../../utils/main";

// TODO: Unit test this with firestore emulator
const create: DataProvider["create"] = async (collection, params) => {
  if (params === undefined)
    throw new Error(
      "Failed to Document Creation: make sure you're specifying new document's data"
    );

  const baseDataResult = baseData();

  const newDocRef = doc(fs, collection, baseDataResult.id).withConverter(
    documentConverter
  );
  await setDoc(newDocRef, {
    ...params.data,
    ...baseDataResult,
  });
  const addedDoc = (await getDoc(newDocRef)).data();

  if (!addedDoc)
    console.error(
      "Unable to Return Created Document: `create()` controller is unable to return the newly created document with data",
      params.data
    );

  return {
    data: addedDoc ?? dataProviderUtils.generateEmptyDoc(),
  };
};

export default create;
