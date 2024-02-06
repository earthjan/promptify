import { AuthProvider } from "../../ts/auth-provider/main";
import checkAuth from "./methods/checkAuth";
import login from "./methods/login";
import logout from "./methods/logout";

const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
};

export default authProvider;
