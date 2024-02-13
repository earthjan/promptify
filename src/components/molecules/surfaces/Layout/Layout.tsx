import { Box, Stack } from "@mui/material";
import { AppBar, Drawer } from "../../main";
import { PropsWithChildren } from "react";
import { DrawerProps } from "../../../../ts/components/molecules/main";
import { useTheme } from "@mui/material";
import { SPACING } from "../../../../constants/styles";

interface LayoutProps {
  DrawerProps: DrawerProps;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { children, DrawerProps } = props;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer {...DrawerProps} />

      <Stack sx={{ flex: 1 }}>
        <AppBar />
        <Stack sx={{ p: SPACING }}>{children}</Stack>
      </Stack>
    </Box>
  );
};

export default Layout;
