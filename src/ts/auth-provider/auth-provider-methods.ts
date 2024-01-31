import { Login } from "./login";
import { Logout } from "./logout";

export interface AuthProvider {
  login: Login;
  logout: Logout;
}
