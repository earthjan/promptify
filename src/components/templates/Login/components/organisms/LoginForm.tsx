import { Avatar, Stack, Typography, Button } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import pngs from "../../../../../assets/pngs/pngs";

import packageJson from "../../../../../../package.json";

const LoginForm = () => {
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
        <Typography color="secondary.main" fontWeight="bold">
          Promptify
        </Typography>
      </Stack>

      <Stack sx={{ alignItems: "center", rowGap: 1, my: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Login to your account
        </Typography>
        <Typography>Sign in to create and manage your prompts!</Typography>
      </Stack>

      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        fullWidth
        sx={{ borderRadius: 5, my: 1 }}
      >
        Sign in with Google
      </Button>
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
