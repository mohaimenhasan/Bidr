import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
          preferred_username: ''
        }
      });
      navigate('/verify');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <>
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }} maxWidth="xs">
      <Box sx={{ mx: 'auto' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button onClick={handleGoBack} sx={{ marginBottom: 4 }}>Go Back</Button>
            <Typography variant="h5" align="center" sx={{ marginTop: 2 }}>
              Sign up for Bidr
            </Typography>
            <div style={{ width: '100px' }}></div>
          </Box>
          <Box component="form" onSubmit={handleSignup} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Sign Up
            </Button>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body2" align="center">
                Already a user? <Button variant="text" onClick={handleLogin}>Log in here</Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
    </>
  );
}

export default Signup;
