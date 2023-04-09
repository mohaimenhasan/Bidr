import React from 'react';
import Navbar from '../Components/Navbar';
import logo from '../logobidr.svg';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function Home() {
  const spring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.2 });
        await next({ scale: 1 });
        await new Promise((resolve) => setTimeout(resolve, 500)); // wait for 2 seconds
      }
    },
  });

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          padding: '0 16px',
        }}
      >
        <animated.h2 style={spring} sx={{ mb: 4 }}>
          <img src={logo} alt="Bidr logo" style={{ height: '10rem', maxWidth: '100%', marginTop: '16px' }} />
        </animated.h2>
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Get the best rental deal with Bidr!
        </Typography>
        <Card sx={{ maxWidth: 700, mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Bidr is a rental platform that lets you bid on rental properties 
              at a fair market value. We believe that renting a home should not 
              be a game of luck, but a fair and transparent process that benefits 
              both the tenant and the landlord. Get started with Bidr today and 
              find your perfect rental home!
            </Typography>
          </CardContent>
        </Card>
        <Button variant="contained" color="primary" size="large" sx={{ width: '100%', maxWidth: '400px' }} component={Link} to="/signup">
          Get started
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
