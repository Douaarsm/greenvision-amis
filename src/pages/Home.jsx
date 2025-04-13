import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HeroSection from '../assets/components/HeroSection';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Bienvenue sur Les Amis de Demain
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Découvrez notre mission et nos projets pour un avenir meilleur.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 