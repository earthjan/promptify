import { Status } from "../../../../ts/api/status";
import { UserCredential } from "../../../../ts/auth-provider/identity";

type LoginResultData = UserCredential | undefined;

export interface UseLoginResult extends Status {
  data: LoginResultData;
  login: () => Promise<LoginResultData>;
}
