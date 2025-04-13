import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jean Dupont',
      role: 'Président',
      description: 'Expert en bien-être et développement personnel avec plus de 10 ans d\'expérience.',
      image: '/images/team/jean.jpg'
    },
    {
      id: 2,
      name: 'Marie Martin',
      role: 'Directrice des Projets',
      description: 'Spécialiste en nutrition et éducation à la santé.',
      image: '/images/team/marie.jpg'
    },
    {
      id: 3,
      name: 'Pierre Durand',
      role: 'Coordinateur des Activités',
      description: 'Coach sportif et animateur d\'ateliers de méditation.',
      image: '/images/team/pierre.jpg'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Notre Équipe
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item key={member.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team; 