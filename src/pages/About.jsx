import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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
    }
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8, 
      backgroundColor: '#000000',
      minHeight: '100vh',
      direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
    }}>
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
          {t('about_title')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2e7d32',
                  borderRadius: '12px',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    color: '#2e7d32',
                    fontWeight: 'bold',
                    mb: 3,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {t('mission_title')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  {t('mission_text')}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2e7d32',
                  borderRadius: '12px',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    color: '#2e7d32',
                    fontWeight: 'bold',
                    mb: 3,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {t('vision_title')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  {t('vision_text')}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About; 