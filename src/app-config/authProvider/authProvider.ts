import { AuthProvider } from "../../ts/auth-provider/main";
import login from "./methods/login";
import logout from "./methods/logout";

const authProvider: AuthProvider = {
  login,
  logout,
};

export default authProvider;
