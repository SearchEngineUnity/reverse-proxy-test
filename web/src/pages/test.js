import React from 'react';
// import { Container, Typography, Paper, Box, Button } from '@material-ui/core';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../containers/layout';
// import { Link } from "gatsby"
// import { Link } from 'gatsby-theme-material-ui';
// import styled from 'styled-components';
// import Subtitle from '../components/block-contents/HeroSubtitle';

// const StyledDiv = styled.div``;

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  // paper: {
  //   padding: theme.spacing(0.5),
  //   margin: theme.spacing(4),
  //   color: theme.palette.primary.main,
  // },
  // margin: {
  //   margin: theme.spacing(1),
  // },
  // root: {
  //   '&:hover': {
  //     backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0 0)',
  //   },
  //   color: '#406CCB',
  //   backgroundColor: 'white',
  //   borderColor: '#406CCB',
  // },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="md">
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h2>The Psychology of choosing house paint</h2>
                <Typography component="p" color="textSecondary">
                  By Holly Gronau 17/08/2021
                </Typography>
                <br />
                <Typography component="p" variant="body2">
                  Whether you are painting your home to prepare it for sale, or simply to make it
                  more attractive for your own enjoyment, choosing the right colour is important.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://clintwillies.ca/wps/rest/13766/post/7228167/image.jpg"
              />
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h2>The Psychology of choosing house paint</h2>
                <Typography component="p" color="textSecondary">
                  By Holly Gronau 17/08/2021
                </Typography>
                <br />
                <Typography component="p" variant="body2">
                  Whether you are painting your home to prepare it for sale, or simply to make it
                  more attractive for your own enjoyment, choosing the right colour is important.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://clintwillies.ca/wps/rest/13766/post/7228167/image.jpg"
              />
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h2>The Psychology of choosing house paint</h2>
                <Typography component="p" color="textSecondary">
                  By Holly Gronau 17/08/2021
                </Typography>
                <br />
                <Typography component="p" variant="body2">
                  Whether you are painting your home to prepare it for sale, or simply to make it
                  more attractive for your own enjoyment, choosing the right colour is important.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://clintwillies.ca/wps/rest/13766/post/7228167/image.jpg"
              />
            </Card>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h2>The Psychology of choosing house paint</h2>
                <Typography component="p" color="textSecondary">
                  By Holly Gronau 17/08/2021
                </Typography>
                <br />
                <Typography component="p" variant="body2">
                  Whether you are painting your home to prepare it for sale, or simply to make it
                  more attractive for your own enjoyment, choosing the right colour is important. A
                  colour is not just a matter of taste, it is also, to a large extent, about the
                  emotions it elicits.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://clintwillies.ca/wps/rest/13766/post/7228167/image.jpg"
              />
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h2>The Psychology of choosing house paint</h2>
                <Typography component="p" color="textSecondary">
                  By Holly Gronau 17/08/2021
                </Typography>
                <br />
                <Typography component="p" variant="body2">
                  Whether you are painting your home to prepare it for sale, or simply to make it
                  more attractive for your own enjoyment, choosing the right colour is important. A
                  colour is not just a matter of taste, it is also, to a large extent, about the
                  emotions it elicits.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://clintwillies.ca/wps/rest/13766/post/7228167/image.jpg"
              />
            </Card>
          </Grid>
        </Grid>
        {/* <Paper className={classes.paper} elevation={5}>
        <Box p={0.5}>
          <Typography variant="h1">
            Check out my <Link to="/blog">blog</Link>
          </Typography>{' '}
          <Subtitle>This is the subtitle</Subtitle>
          <Typography variant="h2">variant h2</Typography>
          <Typography variant="h3">variant h3</Typography>
          <Typography variant="h4">variant h4</Typography>
          <Typography variant="h5">variant h5</Typography>
          <Typography variant="h6">variant h6</Typography>
          <Typography variant="body1">variant body1. is a p tag</Typography>
          <Typography variant="body2">variant body2. is a p tag</Typography>
          <Typography variant="subtitle1">variant subtitle1. is a h6</Typography>
          <Typography variant="subtitle2">variant subtitle2. is a h6</Typography>
          <Typography variant="button">variant button. is a a span</Typography>
          <br />
          <Typography variant="caption">variant caption. is a span</Typography>
          <br />
          <Typography variant="overline">variant overline. is a span</Typography>
        </Box>
        <StyledDiv>this should be red</StyledDiv>
      </Paper>
      <div>
        <Button variant="outlined" size="small" color="secondary" className={classes.margin}>
          Click here for a free quote.
        </Button>
        <Button
          variant="contained"
          disableElevation
          size="small"
          color="secondary"
          className={classes.margin}
        >
          Click here for a free quote.
        </Button>
        <Button variant="contained" size="medium" color="secondary" className={classes.margin}>
          Click here for a free quote.
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Click here for a free quote.
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>
          Contact us
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Contact us
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Contact us
        </Button>
      </div>
      <div>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Contact us
        </Button>
        <Button variant="outlined" size="medium" className={`${classes.margin} ${classes.root}`}>
          Contact us
        </Button>
        <btn
          className={`${classes.margin} ${classes.root}`}
          style={{
            padding: '6px 16PX',
            borderRadius: '4px',
            backgroundColor: '#406CCB',
            color: 'white',
            boxShadow:
              '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
          }}
        >
          Contact us
        </btn>
      </div>
      <div>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Contact us
        </Button>
        <div className={`${classes.margin} ${classes.root}`}>
          <Button variant="outlined" size="medium" color="primary">
            Contact us
          </Button>
        </div>
      </div> */}
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Layout>
  );
};

export default Page;
