import { GetCurrentUser, Logout, Login, CheckAuth } from "./main";
export interface AuthProvider {
  login: Login;
  logout: Logout;
  checkAuth: CheckAuth;
  getCurrentUser: GetCurrentUser;
}
