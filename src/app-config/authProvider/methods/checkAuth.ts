import { AuthProvider } from "../../../ts/auth-provider/auth-provider-methods";
import { hasCurrentUser } from "../../firebase";

const checkAuth: AuthProvider["checkAuth"] = () => {
  const result = hasCurrentUser();

  return Promise.resolve(result);
};

export default checkAuth;
