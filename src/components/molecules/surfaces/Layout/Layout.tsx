import { Box, Stack } from "@mui/material";
import { AppBar, Drawer } from "../../main";
import { PropsWithChildren } from "react";
import { useTheme } from "@mui/material";
import { SPACING } from "../../../../constants/styles";
import {
  AppBarProps,
  DrawerProps,
} from "../../../../ts/components/molecules/main";

interface LayoutProps {
  DrawerProps: DrawerProps;
  AppBarProps: AppBarProps;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { children, DrawerProps, AppBarProps } = props;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer {...DrawerProps} />

      <Stack sx={{ flex: 1 }}>
        <AppBar {...AppBarProps} />
        <Stack sx={{ p: SPACING }}>{children}</Stack>
      </Stack>
    </Box>
  );
};

export default Layout;
