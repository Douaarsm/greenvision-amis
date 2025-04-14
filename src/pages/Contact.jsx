import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: isMobile ? 4 : 8, 
        px: isMobile ? 2 : 4,
        backgroundColor: '#000000', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typography 
          variant={isMobile ? "h3" : "h2"} 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            mb: isMobile ? 4 : 6,
            fontWeight: 'bold',
            color: '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontSize: isMobile ? '1.8rem' : '2.5rem'
          }}
        >
          {t('contact')}
        </Typography>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Box 
                component="form" 
                noValidate 
                autoComplete="off"
                sx={{
                  '& .MuiTextField-root': {
                    mb: isMobile ? 1.5 : 2,
                    '& .MuiOutlinedInput-root': {
                      color: '#ffffff',
                      '& fieldset': {
                        borderColor: '#2e7d32',
                      },
                      '&:hover fieldset': {
                        borderColor: '#4caf50',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4caf50',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#bdbdbd',
                      '&.Mui-focused': {
                        color: '#4caf50',
                      },
                    },
                  },
                }}
              >
                <TextField
                  fullWidth
                  label={t('name')}
                  variant="outlined"
                  margin="normal"
                  required
                  size={isMobile ? "small" : "medium"}
                />
                <TextField
                  fullWidth
                  label={t('email')}
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  size={isMobile ? "small" : "medium"}
                />
                <TextField
                  fullWidth
                  label={t('message')}
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={isMobile ? 3 : 4}
                  size={isMobile ? "small" : "medium"}
                />
                <Button
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    mt: 2,
                    backgroundColor: '#2e7d32',
                    '&:hover': {
                      backgroundColor: '#4caf50',
                    },
                    px: isMobile ? 3 : 4,
                    py: isMobile ? 1 : 1.5,
                    fontSize: isMobile ? '0.9rem' : '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    width: isMobile ? '100%' : 'auto'
                  }}
                >
                  {t('send')}
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Box 
                sx={{ 
                  mt: isMobile ? 2 : 4,
                  p: isMobile ? 2 : 4,
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  border: '1px solid #2e7d32',
                }}
              >
                <Typography 
                  variant={isMobile ? "h6" : "h5"} 
                  gutterBottom
                  sx={{
                    color: '#2e7d32',
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: isMobile ? '1.2rem' : '1.5rem'
                  }}
                >
                  {t('contact_info')}
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    color: '#bdbdbd',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  ✉ {t('email')}: contact@lesamisdemain.org
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    color: '#bdbdbd',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  📞 {t('phone')}: +212703771071
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    color: '#bdbdbd',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  📍 {t('address')}: Maison El Hank
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact; 