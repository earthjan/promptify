import { Document } from "../../ts/data-provider/main";

const dataProviderUtils = {
  generateEmptyDoc: (): Document => ({ id: "" }),
  isEmptyDoc: (document: Document): boolean => document.id === "",
};

export default dataProviderUtils;
