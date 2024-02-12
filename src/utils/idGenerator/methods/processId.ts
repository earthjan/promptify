import * as uuid from "uuid";

// TODO: Unit test this to make sure `id` arg reflects the return value.
const processId = (id: any): string => {
  if (!uuid.validate(id)) {
    console.error("Error processing id: Expected valid id, instead got:", id);
    throw new Error(`Error processing id: Expected valid id.`);
  }

  return uuid.parse(id).toString();
};

export default processId;
