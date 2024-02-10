import { DataProvider } from "../../../../ts/data-provider/data-provider-methods";
import { doc, getDoc } from "firebase/firestore";
import { firestore as fs } from "../../../firebase";

// TODO: Unit test this with firestore emulator
const getOne: DataProvider["getOne"] = async (collection, params) => {
  const { id, meta } = params ?? {};

  const hasCustomLookUp =
    meta && meta.dataProviderType === "getOne" && meta.customLookUp;

  if (!id && !hasCustomLookUp)
    throw new Error(
      "Arg `id` undefined: if you intend to attach meta to the data provider, make sure you're supplying the meta correct."
    );

  const docId = id;

  if (!docId)
    throw new Error("Arg `id` undefined: Please, provide the document's id.");

  const docRef = doc(fs, collection, docId);
  const docSnapshot = await getDoc(docRef);

  return {
    data: docSnapshot.data(),
  };
};

export default getOne;
