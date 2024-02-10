import { Timestamp } from "firebase/firestore";

const timestamp = {
  now: (): Date => {
    return Timestamp.now().toDate();
  },
};

export default timestamp;
