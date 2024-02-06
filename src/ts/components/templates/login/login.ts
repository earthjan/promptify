import { Status } from "../../../api/main";

export interface LoginCallbacks {
  onLoginWithGoogle: () => Promise<void>;
}

export interface LoginFormProps extends LoginCallbacks, Status {}

export interface LoginProps extends LoginCallbacks, Status {}
