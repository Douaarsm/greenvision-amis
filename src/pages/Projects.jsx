import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import renouvelementImage from '../assets/picture of assoc/renouvelement .jpg';
import solidariteImage from '../assets/picture of assoc/solidarite.jpg';
import wifaqImage from '../assets/picture of assoc/wifaq.jpg';

const Projects = () => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  const handleJoinClick = () => {
    window.location.href = '/contact';
  };

  const projects = [
    {
      id: 1,
      title: 'Notre expérience de formation à l\'EFET',
      description: `Dans le cadre de notre engagement associatif et de notre volonté de développement personnel et collectif, les membres de l'association Les Amis de Demain ont suivi une formation enrichissante au sein de l'École Française d'Enseignement Technique (EFET).

Cette formation nous a permis d'acquérir des compétences clés en communication, gestion de projets, outils numériques et développement personnel. Elle a été une véritable opportunité de renforcer notre esprit d'équipe, notre sens de l'initiative et notre capacité à mener des actions concrètes sur le terrain.

Grâce à cet apprentissage, nous sommes aujourd'hui mieux outillés pour porter les valeurs de l'association et mener des projets qui ont un réel impact sur notre communauté.`,
      image: renouvelementImage,
    },
    {
      id: 2,
      title: 'Action solidaire avec Bab Rayan – Ensemble pour un avenir meilleur',
      description: `Dans un esprit de partage et de solidarité, l'association Les Amis de Demain a organisé une action humanitaire en collaboration avec l'association Bab Rayan.

Cette initiative a été dédiée à l'aide aux personnes dans le besoin, à travers la distribution de denrées alimentaires, de vêtements et d'autres produits essentiels.

Au-delà de l'aide matérielle, cette action a renforcé les liens humains et a mis en lumière l'importance de l'entraide et de l'engagement associatif. C'est ensemble, main dans la main, que nous construisons un futur plus solidaire et plus humain.`,
      image: solidariteImage,
    },
    {
      id: 3,
      title: 'Invitation à l\'iftar',
      description: `L'Association Amis de Demain et l'Association Troupe des Pays expriment leur profonde gratitude et leurs sincères remerciements à l'Association Al Wifaq pour son aimable invitation à l'iftar.

Ce fut un moment chaleureux, empreint de fraternité et de solidarité, qui reflète les valeurs de partage et d'entraide que nous chérissons. Nous espérons que de telles initiatives continueront à renforcer les liens entre nos associations pour le bien de notre communauté.

Que Dieu vous récompense pour votre générosité. Ensemble, bâtissons un avenir meilleur ! ✨`,
      image: wifaqImage,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Nos Projets
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={`Image de ${project.title}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {truncateText(project.description, 250)}
                </Typography>
                <Button variant="outlined" size="small" fullWidth>
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleJoinClick}
        sx={{
          mt: 4,
          mb: 2,
          display: 'block',
          mx: 'auto',
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Rejoignez-nous
      </Button>
    </Container>
  );
};

export default Projects;
