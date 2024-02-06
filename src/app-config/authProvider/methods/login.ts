import { signInWithPopup } from "firebase/auth";
import { AuthProvider } from "../../../ts/auth-provider/auth-provider-methods";
import { GoogleProviderSingleton, auth } from "../../firebase";

const login: AuthProvider["login"] = async () => {
  const {
    user: { uid, displayName, email },
  } = await signInWithPopup(auth, GoogleProviderSingleton);

  return {
    id: uid,
    displayName: displayName ?? undefined,
    email: email ?? undefined,
  };
};

export default login;
