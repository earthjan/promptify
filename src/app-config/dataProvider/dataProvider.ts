import { DataProvider } from "../../ts/data-provider/data-provider-methods";
import { getList, getOne, create, update } from "./methods/main";

const dataProvider: DataProvider = {
  getList,
  getOne,
  create,
  update,
};

export default dataProvider;
