import React from 'react';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import ImgBlock from '../FluidImgBlock';
import Subtitle from '../block-contents/H1SubtitleSerializer';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';

function ListingHero({ h1, subtitle, image }) {
  return (
    <Box component="section" bgcolor="primary.main" color="primary.contrastText" py={3} id="hero">
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={6} sm={12}>
            <Typography variant="h1">{h1}</Typography>
            {subtitle && <Subtitle blocks={subtitle} />}
          </Grid>
          <Grid item md={6} sm={12}>
            <ImgBlock {...mapFluidImgBlockToProps(image)} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListingHero;
