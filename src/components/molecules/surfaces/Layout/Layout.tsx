import { Box, Stack } from "@mui/material";
import { AppBar } from "../../main";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          minWidth: "250px",
          height: "100vh",
          backgroundColor: "accent.main",
        }}
      >
        Drawer
      </Box>

      <Stack sx={{ flex: 1 }}>
        <AppBar />
        {children}
      </Stack>
    </Box>
  );
};

export default Layout;
