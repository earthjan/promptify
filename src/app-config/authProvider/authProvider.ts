import { AuthProvider } from "../../ts/auth-provider/main";
import { login, logout, checkAuth, getCurrentUser } from "./methods/main";

const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
  getCurrentUser,
};

export default authProvider;
