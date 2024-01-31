import { signOut } from "firebase/auth";
import { AuthProvider } from "../../../ts/auth-provider/main";
import { auth } from "../../firebase";

const logout: AuthProvider["logout"] = async () => {
  await signOut(auth).catch(() => {
    throw new Error("Server failed to logout user.");
  });
};

export default logout;
