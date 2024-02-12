import { Typography } from "@mui/material";
import { CurrentPromptContext } from "../../../contexts/main";

function PromptCreate() {
  return (
    <CurrentPromptContext>
      <Typography>Prompt Create</Typography>
    </CurrentPromptContext>
  );
}

export default PromptCreate;
