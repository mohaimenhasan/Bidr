import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Components/Navbar';

function Dashboard() {
    return(
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
                
            </Box>
    </Box>
    );
}

export default Dashboard;