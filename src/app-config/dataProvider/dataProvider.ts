import { DataProvider } from "../../ts/data-provider/data-provider-methods";
import { getList, getOne } from "./methods/main";

const dataProvider: DataProvider = {
  getList,
  getOne,
};

export default dataProvider;
