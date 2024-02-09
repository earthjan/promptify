import { DataProvider } from "../../../../ts/data-provider/data-provider-methods";
import { firestore as fs } from "../../../firebase";
import {
  collection as fsCollection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import getLastDocumentReference from "./utils/getLastDocumentReference";
import { documentBaseKeys } from "../../../../ts/promptify-types/main";

const getList: DataProvider["getList"] = async (collection, params) => {
  const { pagination, filter, sort, meta } = params ?? {};
  const { field = documentBaseKeys.createdAt, order = "asc" } = sort ?? {};
  const { page = 1, pageSize = 5 } = pagination ?? {};
  const { lastDocumentId } = meta ?? {};

  console.log(lastDocumentId);

  const isFirstPage = page === 1;

  if (lastDocumentId === undefined && !isFirstPage)
    throw new Error("`lastDocumentId` must be supplied  on subsequent pages");

  let listQuery = query(fsCollection(fs, collection));

  if (filter) {
    if (Array.isArray(filter)) {
      filter.forEach((filterObj) => {
        listQuery = query(
          listQuery,
          where(filterObj.attribute, "==", filterObj.value)
        );
      });
    } else {
      listQuery = query(listQuery, where(filter.attribute, "==", filter.value));
    }
  }

  const totalDocs = (await getDocs(listQuery)).size;

  listQuery = query(listQuery, orderBy(field, order));

  if (!isFirstPage && lastDocumentId !== undefined) {
    const lastDocRef = await getLastDocumentReference({
      collection,
      lastDocId: lastDocumentId,
    });
    if (lastDocRef) {
      listQuery = query(listQuery, startAfter(lastDocRef.document));
    } else {
      throw new Error("Unable to retrieve the last document for pagination");
    }
  }

  listQuery = query(listQuery, limit(pageSize));

  const snapshot = await getDocs(listQuery);
  const docs = snapshot.docs.map((doc) => doc.data());

  const seenDocuments = page * pageSize;

  return {
    data: docs,
    total: totalDocs,
    hasNextPage: totalDocs > seenDocuments,
    hasPreviousPage: page > 1,
  };
};

export default getList;