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
          Notre Mission – Les Amis de Demain
          </Typography>
          <Typography paragraph>
          Notre mission est de semer les graines d’un avenir meilleur en accompagnant les jeunes, les enfants et les communautés vers un développement durable, équitable et solidaire.
Nous œuvrons à travers des actions éducatives, culturelles, environnementales et sociales pour éveiller les consciences, renforcer les capacités et promouvoir l'engagement citoyen.

Ensemble, construisons le demain que nous voulons voir.


          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
          Notre Vision – Les Amis de Demain
                    </Typography>
          <Typography paragraph>
          Nous imaginons un avenir où les jeunes sont les moteurs du changement, porteurs de valeurs humaines, écologiques et solidaires.
Notre vision est celle d’une société où chaque jeune est écouté, valorisé et accompagné pour devenir un citoyen actif, conscient de son impact sur le monde.
À travers nos actions, nous rêvons de bâtir des communautés unies, responsables et engagées pour un avenir plus vert, plus juste et plus humain.


          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 