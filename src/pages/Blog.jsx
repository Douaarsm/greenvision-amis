import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Les bienfaits de la méditation',
      excerpt: 'Découvrez comment la méditation peut améliorer votre bien-être quotidien...',
      image: '/images/blog/meditation.jpg',
      date: '15 Mars 2024'
    },
    {
      id: 2,
      title: 'L\'importance de l\'alimentation saine',
      excerpt: 'Apprenez les bases d\'une alimentation équilibrée pour une vie plus saine...',
      image: '/images/blog/nutrition.jpg',
      date: '10 Mars 2024'
    },
    {
      id: 3,
      title: 'Exercices de respiration',
      excerpt: 'Techniques simples pour améliorer votre respiration et réduire le stress...',
      image: '/images/blog/breathing.jpg',
      date: '5 Mars 2024'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Notre Blog
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center">
        Découvrez nos articles sur le bien-être et la santé
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.date}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Lire l'article
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog; 