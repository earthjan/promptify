import { useNavigate } from "react-router-dom";
import TemplateLogin from "../../components/templates/Login/Login";
import useLogin from "../../hooks/auth-provider/useLogin/useLogin";
import routeHelpers from "../../app-config/routes/utils/routeHelpers";

const Login = () => {
  const nav = useNavigate();

  const { login, ...loginStatus } = useLogin();

  const handleLoginWithGoogle = async () => {
    await login().catch(() => console.error("Troubled working with Google"));

    nav(routeHelpers.toMainPage());
  };

  return (
    <TemplateLogin onLoginWithGoogle={handleLoginWithGoogle} {...loginStatus} />
  );
};

export default Login;
