import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Contactez-nous
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Nom"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Envoyer
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Informations de Contact
            </Typography>
            <Typography paragraph>
              Email: contact@lesamisdemain.org
            </Typography>
            <Typography paragraph>
              Téléphone: +33 1 23 45 67 89
            </Typography>
            <Typography paragraph>
              Adresse: 123 Rue du Bien-être, 75000 Paris
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 