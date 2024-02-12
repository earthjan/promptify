import { AuthProvider } from "../../../ts/auth-provider/main";
import { auth } from "../../firebase";

const getCurrentUser: AuthProvider["getCurrentUser"] = async () => {
  const user = auth.currentUser;

  if (user) {
    return {
      displayName: user.displayName ?? undefined,
      email: user.email ?? undefined,
      profilePicture: user.photoURL ?? undefined,
      id: user.uid,
    };
  }

  return null;
};

export default getCurrentUser;
