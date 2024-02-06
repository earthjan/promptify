import { CircularProgress, Stack } from "@mui/material";

const Circular = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Circular;
