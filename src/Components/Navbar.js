import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // import useTheme
import logo from '../logobidr.svg';
import { Auth } from 'aws-amplify';

function Navbar() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      setAuthenticated(true);
    } catch (err) {
      setAuthenticated(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setAuthenticated(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    // navigate to user profile page
    handleMenuClose();
  };

  const handleSettingsClick = () => {
    // navigate to user settings page
    handleMenuClose();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  }

  return (
    <AppBar position="relative" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <img src={logo} alt="Bidr logo" style={{ height: '2rem', maxWidth: '100%', marginRight: '0.5rem', cursor: 'pointer' }} onClick={handleLogoClick} />
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleLogoClick}>
          Bidr
        </Typography>
        {authenticated ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: 'none',
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                  '&:hover': {
                    fontWeight: 'bold',
                  },
                }}
              >
                {user !== null ? user.attributes.given_name : null}
              </Typography>
              <i className="fas fa-caret-down"></i>
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
            <Button color="inherit" onClick={handleSignup}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
