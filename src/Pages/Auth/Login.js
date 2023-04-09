import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await Auth.signIn(email, password);
      // Redirect to the protected route or dashboard after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
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
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
