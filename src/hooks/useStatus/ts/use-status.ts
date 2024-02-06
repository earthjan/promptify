import { StatusType, Status } from "../../../ts/api/main";
import { Error } from "../../../ts/error-center/error";

export interface UseStatusResult extends Status {
  setStatus: (status: StatusType, error?: Error) => void;
}
