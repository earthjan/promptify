import { Avatar, Stack, Typography } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import pngs from "../../../../../assets/pngs/pngs";

import packageJson from "../../../../../../package.json";
import { LoadingButton } from "@mui/lab";
import { LoginFormProps } from "../../../../../ts/components/templates/login/main";
import { Promptify } from "../../../../atoms/main";

const LoginForm = (props: LoginFormProps) => {
  const { onLoginWithGoogle, isLoading } = props;

  return (
    <Stack
      sx={{
        backgroundColor: "accent.main",
        p: 5,
        borderRadius: 5,
        alignItems: "center",
        rowGap: 2,
        border: 1,
        borderColor: "text.secondary",
      }}
    >
      <Stack sx={{ alignItems: "center", rowGap: 1 }}>
        <Avatar src={pngs.PromptifyTabIcon} variant="rounded" />
        <Promptify size="small" />
      </Stack>

      <Stack sx={{ alignItems: "center", rowGap: 1, my: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Login to your account
        </Typography>
        <Typography>Sign in to create and manage your prompts!</Typography>
      </Stack>

      <LoadingButton
        variant="contained"
        startIcon={<GoogleIcon />}
        fullWidth
        loading={isLoading}
        onClick={onLoginWithGoogle}
        sx={{ borderRadius: 5, my: 1 }}
      >
        Google
      </LoadingButton>
      <Stack
        sx={{
          color: "text.secondary",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          width: "80%",
        }}
      >
        <Typography color="inherit">v{packageJson.version}</Typography>
        <Typography color="inherit" sx={{ textAlign: "center" }}>
          © designed & built by Earth Jan Baquir Marzan
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
