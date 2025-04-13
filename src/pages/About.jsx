import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        À Propos de Nous
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Notre Mission
          </Typography>
          <Typography paragraph>
            Les Amis de Demain est une association dédiée à la promotion du bien-être
            et de la santé pour tous. Notre mission est de créer un avenir meilleur
            en favorisant des modes de vie sains et durables.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Notre Vision
          </Typography>
          <Typography paragraph>
            Nous croyons en un monde où chaque individu a accès aux ressources
            nécessaires pour mener une vie équilibrée et épanouissante. Notre vision
            est de construire une communauté solidaire qui s'engage pour le bien-être
            de tous.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 