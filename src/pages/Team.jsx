import React, { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';
import douaaImage from '../assets/picture of assoc/douaa.jpg';
import abdoImage from '../assets/picture of assoc/abdo.jpg';
import hibaImage from '../assets/picture of assoc/hiba.jpg';

const Team = () => {
  useEffect(() => {
    console.log('Team component mounted');
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Douaa Rouissam',
      role: 'Présidente',
      description: 'Présidente de l\'association Les Amis de Demain, DOUAA ROUISSAM est une personne engagée et motivée, qui œuvre avec passion pour soutenir la jeunesse et encourager des initiatives solidaires et citoyennes.',
      image: douaaImage
    },
    {
      id: 2,
      name: 'abdelah ghadban',
      role: 'detenteur d argent',
      description: 'Abdelah Ghadban, détenteur d\'argent de l\'association Les Amis de Demain, est une personne sérieuse et de confiance, qui gère avec rigueur et transparence les ressources financières de l\'association, contribuant ainsi à la bonne réalisation de ses projets.',
      image: abdoImage
    },
    {
      id: 3,
      name: 'HIBA EZZOUIRI',
      role: 'secretaire generale',
      description: 'Hiba Ezzouiri, secrétaire générale de l\'association Les Amis de Demain, est une personne organisée et investie, qui assure la coordination administrative et veille au bon fonctionnement des activités de l\'association.',
      image: hibaImage
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#000000' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Notre Équipe
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4}>
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #2e7d32',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      borderColor: '#4caf50',
                      boxShadow: '0 0 20px rgba(46, 125, 50, 0.3)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '35%',
                      overflow: 'hidden',
                      maxHeight: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#000000'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '10px',
                        filter: 'brightness(0.9)'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff'
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{
                        fontWeight: 'bold',
                        color: '#2e7d32',
                        mb: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="#4caf50" 
                      gutterBottom
                      sx={{
                        fontWeight: 'medium',
                        mb: 2
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="#bdbdbd"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Team; 