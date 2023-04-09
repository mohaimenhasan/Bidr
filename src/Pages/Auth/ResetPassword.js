import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
  const { username, code } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoBack = () => {
    navigate('/login');
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ marginTop: 8 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button onClick={handleGoBack} sx={{ marginBottom: 2 }}>Go Back</Button>
              <Typography variant="h5" align="center">
                Reset Password
              </Typography>
              <div style={{ width: '100px' }}></div>
            </Box>
            {success ? (
              <Typography variant="body1" align="center">
                Your password has been successfully reset. Please <a href="/login">login</a> with your new password.
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleResetPassword} sx={{ marginTop: 2 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="New Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm New Password"
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
                  Reset Password
                </Button>
              </Box>
            )}
          </Paper>
        </Box>
      </Container>
    </>
  );
}


export default ResetPassword;
