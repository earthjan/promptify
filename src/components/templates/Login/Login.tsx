import { Stack } from "@mui/material";

import LoginForm from "./components/organisms/LoginForm";
import { LoginProps } from "../../../ts/components/templates/login/login";

function Login(props: LoginProps) {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <LoginForm {...props} />
    </Stack>
  );
}

export default Login;
