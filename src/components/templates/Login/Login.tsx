import { Box, Stack, Typography, Button } from "@mui/material";

import { signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";

import { ErrorBoundary } from "react-error-boundary";

import { Outlet, useNavigate } from "react-router-dom";

import routes from "../../../app-config/routes";

import { GoogleProviderSingleton, auth } from "../../..//app-config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import LoginForm from "./components/organisms/LoginForm";

function Login() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <LoginForm />
    </Stack>
  );
}

export default Login;
