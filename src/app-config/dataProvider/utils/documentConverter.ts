import { FirestoreDataConverter } from "firebase/firestore";
import { Document } from "../../../ts/data-provider/main";
import { dataProviderUtils } from "../../../utils/main";

const documentConverter: FirestoreDataConverter<Document> = {
  toFirestore: (document) => {
    return { ...document };
  },
  fromFirestore: (documentSnapshot): Document => {
    const data = documentSnapshot.data();

    if (documentSnapshot.exists() && "id" in data) {
      console.error(
        `Unable to Convert Document from Firestore: Firestore returns a document without an "id"`,
        data
      );
      return {
        ...data,
        id: data.id,
      };
    }

    return dataProviderUtils.generateEmptyDoc();
  },
};

export default documentConverter;
