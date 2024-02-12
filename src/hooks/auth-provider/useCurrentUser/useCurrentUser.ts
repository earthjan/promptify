import { useEffect, useState } from "react";
import authProvider from "../../../app-config/authProvider/authProvider";
import { Identity } from "../../../ts/auth-provider/main";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../app-config/firebase";

interface IUseCurrentUserResult {
  currentUser: Identity | null;
}

/**
 * App layer hook to get current user using the `getCurrentUser()` auth controller
 */
const useCurrentUser = (): IUseCurrentUserResult => {
  const [currentUser, setCurrentUser] =
    useState<IUseCurrentUserResult["currentUser"]>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // To still use the auth provider consistently
        authProvider.getCurrentUser().then((user) => {
          setCurrentUser(user);
        });
      } else setCurrentUser(null);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser };
};

export default useCurrentUser;
