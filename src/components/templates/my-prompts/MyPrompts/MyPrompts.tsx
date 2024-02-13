import { Stack, Typography } from "@mui/material";
import { CurrentPromptContext } from "../../../../contexts/main";
import { Outlet } from "react-router-dom";

function MyPrompts() {
  return (
    <Stack>
      <Typography>My Prompts</Typography>
      <Outlet />
    </Stack>
  );
}

export default MyPrompts;
