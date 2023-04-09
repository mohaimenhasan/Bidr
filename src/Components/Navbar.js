import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../logobidr.svg';
import { Auth } from 'aws-amplify';

function Navbar() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
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

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Bidr logo" style={{ height: '2rem', maxWidth: '100%', marginRight: '0.5rem' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bidr
        </Typography>
        {authenticated ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
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
