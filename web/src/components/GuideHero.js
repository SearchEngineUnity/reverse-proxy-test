import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import ImgBlock from './FluidImgBlock';
import Subtitle from './block-contents/HeroSubtitleSerializer';
import ProgressBar from './ScrollProgressBar';
import { mapFluidImgBlockToProps } from '../lib/mapToProps';

function GuideHero({ h1, subtitle, date, image }) {
  const lastUpdatedDate = new Date(date.replace(/-/g, '/'));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <Box bgcolor="primary.main" color="primary.contrastText" id="hero" component="section" py={8}>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
            <Grid item md={6} xs={12}>
              <Typography variant="h1" gutterBottom>
                {h1}
              </Typography>
              <Subtitle blocks={subtitle} />
              <br />
              <Typography component="p" variant="subtitle2">
                Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <ImgBlock {...mapFluidImgBlockToProps(image)} loading="eager" height={400} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ProgressBar />
    </>
  );
}

export default GuideHero;
