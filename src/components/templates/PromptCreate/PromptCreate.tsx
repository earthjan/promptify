import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../../app-config/firebase";

function PromptCreate() {
  const logout = async () => {
    await signOut(auth).catch((error) => {
      console.error(error);
    });
  };

  return <button onClick={logout}>Logout</button>;
}

export default PromptCreate;
