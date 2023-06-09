import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { TextField, Button, Paper, Typography, Container, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await Auth.signIn(email, password);
      if (user !== null){
        navigate('/dashboard');
      }
    } 
    catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        // Redirect to the verify page if the user is not confirmed
        navigate('/verify', { state: { email } });
      } else {
        setError(err.message);
      }
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await Auth.forgotPassword(email);
      navigate('/resetpassword');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }} maxWidth="xs">
      <Box sx={{ mx: 'auto' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Button onClick={handleGoBack} sx={{ marginBottom: 2 }}>Go Back</Button>
          <Typography variant="h5" align="center">
            Login to Bidr
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body2" align="center">
                <Link href="#" onClick={handleForgotPassword}>
                  Forgot Password?
                </Link>
              </Typography>
              <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
                New to Bidr? 
                <Link href="#" onClick={handleSignUp} sx={{ marginLeft: 1 }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
