import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import QueryClientContext from "./QueryClientContext";

import { hasCurrentUser, auth } from "../../app-config/firebase";

import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  const [content, setContent] = useState(<CircularProgress />);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setContent(<Outlet />);
      } else {
        navigate(redirectPath, { replace: true });
      }
    });

    return () => unsubscribe();
  }, []);

  return <QueryClientContext enableDevTool>{content}</QueryClientContext>;
};

export default ProtectedRoute;
