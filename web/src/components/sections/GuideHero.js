import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import ImgBlock from '../FluidImgBlock';
import Subtitle from '../block-contents/H1SubtitleSerializer';
import ProgressBar from '../ScrollProgressBar';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';

function GuideHero({ h1, subtitle, date, image }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
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
              {subtitle && <Subtitle blocks={subtitle} />}
              <br />
              {lastUpdatedDate && (
                <Box fontSize="0.8rem" fontWeight={400} component="p" fontStyle="italic">
                  Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
                </Box>
              )}
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
