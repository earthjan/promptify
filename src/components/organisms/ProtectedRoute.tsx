import { useEffect, useState } from "react";

import { Outlet, matchPath, useLocation, useNavigate } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import QueryClientContext from "./QueryClientContext";

import { auth } from "../../app-config/firebase";

import { onAuthStateChanged } from "firebase/auth";
import routes from "../../app-config/routes/routes";
import { CurrentUserContext } from "../../contexts/main";
import { Layout } from "../molecules/main";
import ConstructionIcon from "@mui/icons-material/Construction";

/**
 * Parent component to encapsulate global configs for private routes.
 */
// TODO: Layout drawer items must be defined separately
const ProtectedRoute = () => {
  const [content, setContent] = useState(<CircularProgress />);

  const location = useLocation();
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
      <CurrentUserContext>
        <Layout
          DrawerProps={{
            items: [
              {
                id: routes.myPrompts,
                label: "My Prompts",
                icon: <ConstructionIcon />,
                isSelected: Boolean(matchPath(routes.main, location.pathname)),
                onClick: () => {
                  navigate(routes.main);
                },
              },
            ],
          }}
        >
          {content}
        </Layout>
      </CurrentUserContext>
    </QueryClientContext>
  );
};

export default ProtectedRoute;
