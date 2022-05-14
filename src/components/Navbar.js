import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from '../context/AuthContext';


import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  //  const currentUser={displayName:"TOPRAK"}
   const navigate=useNavigate();
   let {currentUser,logout}=useAuth()
  //  const currentUser=false

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };



  return (
    <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-red">
          <h4>FireBase-Blog</h4>
        </Link>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              { currentUser?(
                <>
              <MenuItem  onClick={()=> {
                  handleCloseUserMenu()
                  navigate("/profile")}}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem  onClick={()=> {
                  navigate("/new")
                  handleCloseUserMenu()
                  }}>
                  <Typography textAlign="center">New</Typography>
                </MenuItem>
                <MenuItem  onClick={()=> {
                  logout()
                  handleCloseUserMenu()
                  }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem> </>):( <>
              <MenuItem  onClick={()=> {
                  handleCloseUserMenu()
                  navigate("/login")}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem  onClick={()=> {
                  navigate("/register")
                  handleCloseUserMenu()
                  }}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem> </>)}
              
             
            </Menu>
          </Box>

       
      </div>
    </nav>
  </div>
  )
}

export default Navbar