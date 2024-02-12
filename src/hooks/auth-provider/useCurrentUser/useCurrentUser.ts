import { useEffect, useState } from "react";
import authProvider from "../../../app-config/authProvider/authProvider";
import { Identity } from "../../../ts/auth-provider/main";

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
    authProvider.getCurrentUser().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  return { currentUser };
};

export default useCurrentUser;
