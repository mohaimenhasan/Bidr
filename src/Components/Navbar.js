import React from 'react';
import logo from '../logobidr.svg';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <AppBar position="static">
      <Toolbar>
      <img src={logo} alt="Bidr logo" style={{ height: '2rem', maxWidth: '100%', marginRight: '4px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bidr
        </Typography>
        <Button color="inherit" onClick={handleLogin}>
          Login
        </Button>
        <Button color="inherit" onClick={handleSignup}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
