import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import renouvelementImage from '../assets/picture of assoc/renouvelement .jpg';
import solidariteImage from '../assets/picture of assoc/solidarite.jpg';
import wifaqImage from '../assets/picture of assoc/wifaq.jpg';

const Projects = () => {
  const { t } = useTranslation();
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  const handleJoinClick = () => {
    window.location.href = '/contact';
  };

  const projects = [
    {
      id: 1,
      title: t('project1_title'),
      description: t('project1_description'),
      image: renouvelementImage,
    },
    {
      id: 2,
      title: t('project2_title'),
      description: t('project2_description'),
      image: solidariteImage,
    },
    {
      id: 3,
      title: t('project3_title'),
      description: t('project3_description'),
      image: wifaqImage,
    },
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
          {t('projects')}
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
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
                      image={project.image}
                      alt={`Image de ${project.title}`}
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
                      variant="h6" 
                      component="h2"
                      sx={{
                        fontWeight: 'bold',
                        color: '#2e7d32',
                        mb: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="#bdbdbd" 
                      sx={{ 
                        mb: 2,
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      {truncateText(project.description, 250)}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      fullWidth
                      sx={{
                        color: '#2e7d32',
                        borderColor: '#2e7d32',
                        '&:hover': {
                          borderColor: '#4caf50',
                          backgroundColor: 'rgba(46, 125, 50, 0.1)'
                        }
                      }}
                    >
                      {t('learn_more')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleJoinClick}
            sx={{
              backgroundColor: '#2e7d32',
              '&:hover': {
                backgroundColor: '#4caf50',
              },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {t('join_cta')}
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Projects;
