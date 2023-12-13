import { Box, Stack, Typography, Button } from "@mui/material";

import { signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";

import { ErrorBoundary } from "react-error-boundary";

import { Outlet, useNavigate } from "react-router-dom";

import routes from "../../../app-config/routes";

import { GoogleProviderSingleton, auth } from "../../..//app-config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function Login() {
  const nav = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        nav("/" + routes.main);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, GoogleProviderSingleton)
      .then(() => {
        nav(routes.main);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = async () => {
    await firebaseSignOut(auth).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Stack
      component="form"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        border: 1,
        p: 1,
        borderRadius: 5,
      }}
    >
      <Typography>{auth.currentUser?.displayName}</Typography>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      <Button onClick={signOut}>Signout</Button>
    </Stack>
  );
}

export default Login;
