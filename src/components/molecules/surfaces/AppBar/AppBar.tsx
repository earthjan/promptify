import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Divider,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Identity } from "../../../../ts/auth-provider/identity";
import { Status } from "../../../../ts/api/status";
import { useCurrentUserContext } from "../../../../contexts/main";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { AppBarProps } from "../../../../ts/components/molecules/main";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppBar(props: AppBarProps) {
  const { items } = props;

  const { currentUser } = useCurrentUserContext();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              columnGap: 1,
              justifyContent: "space-between",
            }}
          >
            <Tooltip title="Search prompts">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Box
              sx={{
                display: "flex",
                columnGap: 1,
              }}
            >
              <Button startIcon={<AddIcon />}>Create Prompt</Button>
              {currentUser && (
                <Box sx={{ flexGrow: 0, display: "flex", columnGap: 1 }}>
                  <Box>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          src={currentUser.profilePicture}
                          alt={currentUser.displayName}
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {!isLgUp && (
                        <ListItem>
                          <ListItemText
                            primary={currentUser.displayName}
                            secondary={currentUser.email}
                          />
                        </ListItem>
                      )}

                      {!isLgUp && <Divider variant="inset" component="li" />}

                      {items.map(({ id, label, icon, onClick }) => (
                        <MenuItem
                          key={id}
                          onClick={() => {
                            if (onClick) onClick(id);
                            handleCloseUserMenu();
                          }}
                        >
                          {icon && <MenuIcon>{icon}</MenuIcon>}
                          <Typography textAlign="center">{label}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                  {isLgUp && (
                    <Stack
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{currentUser.displayName}</Typography>

                      <Typography>{currentUser.email}</Typography>
                    </Stack>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
export default AppBar;
