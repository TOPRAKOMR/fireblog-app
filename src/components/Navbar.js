import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
import { NavLink, Navigate, useNavigate } from "react-router-dom";

// const pages = ['Login', 'Register'];
const settingsIn = ["Profile", "New", "Logout"];
const settingsOut = ["Login", "Register"];

const Navbar = () => {
  const currentUser = false;

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            TOPRAK
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            TOPRAK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* toprak */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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

                {currentUser?(
                    settingsIn.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Button href={setting}>
                            <Typography textAlign="center">{setting}</Typography>
                          </Button>
                        </MenuItem>
                      ))

                ):(
                    settingsOut.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Button href={setting}>
                            <Typography textAlign="center">{setting}</Typography>
                          </Button>
                        </MenuItem>
                      ))

                )

                }

              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleClick()}>
                  <NavLink to={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </NavLink>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
