import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import QueryClientContext from "./QueryClientContext";

import { auth } from "../../app-config/firebase";

import { onAuthStateChanged } from "firebase/auth";
import routes from "../../app-config/routes/routes";
import { CurrentUserContext } from "../../contexts/main";

/**
 * Parent component to encapsulate global configs for private routes.
 */
const ProtectedRoute = () => {
  const [content, setContent] = useState(<CircularProgress />);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setContent(<Outlet />);
      } else {
        navigate(`/${routes.login}`, { replace: true });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <QueryClientContext enableDevTool>
      <CurrentUserContext>{content}</CurrentUserContext>
    </QueryClientContext>
  );
};

export default ProtectedRoute;
