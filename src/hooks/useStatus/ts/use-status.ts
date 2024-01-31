import { StatusType, Status } from "../../../ts/api/main";

export interface UseStatusResult extends Status {
  setStatus: (status: StatusType, error?: Error) => void;
}
