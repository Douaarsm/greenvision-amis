import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HeroSection from '../assets/components/HeroSection';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <HeroSection />
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t('welcome')}
        </Typography>
        <Typography variant="body1" paragraph align="center">
          {t('mission')}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 