import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Verify() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state && state.email; // Get the email passed from login.js
  if (!email){
    navigate('/login');
  }
  const handleVerification = async (e) => {
    e.preventDefault();

    try {
      await Auth.confirmSignUp(email, code);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    try {
      await Auth.resendSignUp(email);
      alert('Verification code sent to your email');
    } catch (err) {
      setError(err.message);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <>
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }} maxWidth="xs">
      <Box sx={{ mx: 'auto' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" align="center">
            Verify Your Email
          </Typography>
          <Box component="form" onSubmit={handleVerification} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              margin="normal"
              label="Verification Code"
              variant="outlined"
              value={code}
              onChange={(e) => setCode(e.target.value)}
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
              Verify
            </Button>
            <Button
              fullWidth
              variant="text"
              color="primary"
              disabled={resendLoading}
              onClick={handleResendCode}
              sx={{ marginTop: 1 }}
            >
              {resendLoading ? 'Sending...' : 'Resend code'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
    </>
  );
}

export default Verify;
