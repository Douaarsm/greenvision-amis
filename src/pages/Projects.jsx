import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Programme de Méditation',
      description: 'Ateliers hebdomadaires de méditation pour réduire le stress et améliorer le bien-être mental.',
      image: '/images/projects/meditation.jpg'
    },
    {
      id: 2,
      title: 'Éducation Nutritionnelle',
      description: 'Cours et ateliers sur l\'alimentation saine et l\'équilibre nutritionnel.',
      image: '/images/projects/nutrition.jpg'
    },
    {
      id: 3,
      title: 'Activités Physiques',
      description: 'Séances de sport adaptées à tous les niveaux pour maintenir une bonne santé physique.',
      image: '/images/projects/sport.jpg'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Nos Projets
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 