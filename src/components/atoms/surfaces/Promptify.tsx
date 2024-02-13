import { Typography } from "@mui/material";
import { forwardRef } from "react";

interface PromptifyProps {
  size: "small" | "medium" | "large";
}

const Promptify = forwardRef<HTMLSpanElement, PromptifyProps>((props, ref) => {
  const { size } = props;

  let fontSize = "1rem";

  if (size === "small") fontSize = "1rem";
  if (size === "medium") fontSize = "1.6rem";
  if (size === "large") fontSize = "2rem";

  return (
    <Typography
      ref={ref}
      fontSize={fontSize}
      color="secondary.main"
      fontWeight="bold"
    >
      Promptify
    </Typography>
  );
});

export default Promptify;
