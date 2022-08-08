import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@material-ui/core';
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
              <Typography variant="body1">
                <b>DISCLAIMER:</b> Techboomers independently reviews everything we recommend. When
                you buy something after clicking on a link to another website, we may earn a
                commission.{' '}
                <Link
                  href="https://techboomers.com/how-to-support-techboomers"
                  style={{ color: 'black' }}
                >
                  <b>{`Learn More >`}</b>
                </Link>
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
