import { DocumentBase } from "@earthjan/promptify-types";
import { idGenerator, timestamp } from "../../../../../utils/main";

const baseData = (): DocumentBase => {
  const now = timestamp.now();

  return {
    id: idGenerator.generateId(),
    createdAt: now,
    updatedAt: now,
  };
};

export default baseData;
