import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import QueryClientContext from "./QueryClientContext";
import useCheckAuth from "../../hooks/auth-provider/useCheckAuth/useCheckAuth";
import Circular from "../atoms/loaders/Circular";
import routes from "../../app-config/routes/routes";

/**
 * Parent component to encapsulate global configs for public routes.
 */
function PublicRoute() {
  const { checkAuth, status, isLoading, isError, isSuccess, error } =
    useCheckAuth();

  const nav = useNavigate();

  useEffect(() => {
    checkAuth().then((isAuth) => {
      if (isAuth) {
        nav(`/${routes.main}`);
      } else {
        nav(`/${routes.login}`);
      }
    });
  }, []);

  console.log(status)

  if (isError) {
    console.error(error?.message);
  }

  if (isLoading) return <Circular />;

  return (
    <QueryClientContext enableDevTool>
      <Outlet />
    </QueryClientContext>
  );
}

export default PublicRoute;
