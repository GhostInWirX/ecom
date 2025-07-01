//A9
import { Grid, Typography, Button, Link, Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 3,
        mt: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="space-around" sx={{ textAlign: 'center' }}>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>About</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Jobs</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Blog</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Partners</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Solutions
          </Typography>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Marketing</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Analytics</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Commerce</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Support</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Documentation
          </Typography>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Guides</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>API Status</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Privacy
          </Typography>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Legal</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Terms</Button>
          </div>
          <div>
            <Button sx={{ color: 'white', display: 'block', mb: 1, textTransform: 'none', width: '100%' }}>Claim</Button>
          </div>
        </Grid>
      </Grid>

      <Box sx={{ pt: 4, textAlign: 'center' }}>
        <Typography variant="body2" component="p">
          © 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p">
          Made By BigBoss.
        </Typography>
        <Typography variant="body2" component="p">
          Icons made by{' MUI '}
          <br></br>
          <Link href="" color="inherit" underline="always">
            Riaz
          </Link>{' '}
          from{' '}
          <Link href="" color="inherit" underline="always">
            Press
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
