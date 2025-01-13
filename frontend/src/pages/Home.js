import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
