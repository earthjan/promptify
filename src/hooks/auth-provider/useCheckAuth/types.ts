import { Status } from "../../../ts/api/status";

export interface UseCheckAuthResult extends Status {
  isAuthenticated: boolean;
  checkAuth: () => Promise<boolean>;
}
