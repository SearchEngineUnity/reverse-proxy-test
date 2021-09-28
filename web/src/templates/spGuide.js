import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid, Box, Hidden } from '@material-ui/core';
import Layout from '../containers/layout';
import GuideHero from '../components/sections/GuideHero';
import GuideBody from '../components/block-contents/GuideSerializer';
import ToC from '../components/TableOfContent';
// import SocialSharing from '../components/SocialSharing';
import Seo from '../components/Seo';

import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query spGuideTemplate($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    guide: sanitySpGuide(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      displayDate
      title
      twitter {
        description
        title
      }
      noindex
      nofollow
      canonical
      id
      h1
      facebook {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 14 })
      toc {
        _key
        title
      }
      description
      heroImage {
        alt
        _rawAsset(resolveReferences: { maxDepth: 10 })
      }
      _rawSubtitle(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const SPGuide = ({ data, location }) => {
  const type = 'guide';

  console.log(alert('holly holly holly!'));
  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.guide, data.site.siteMetadata.siteUrl, type)} />
      <GuideHero {...mapGuideHeroToProps(data.guide)} />
      <Box my={3}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={9} xs={12}>
              <GuideBody blocks={data.guide._rawBody} />
            </Grid>
            <Hidden smDown>
              <Grid item md={3}>
                <ToC toc={data.guide.toc} />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default SPGuide;
