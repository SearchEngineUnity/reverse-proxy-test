require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://demo-center.searchengineunity.com', // update to new netlify URL
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  pathPrefix: `/learn`,
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       'UA-55594855-1', // Google Analytics / GA
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    },
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Lobster`,
              },
              {
                family: `Material+Icons`,
              },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ao6csa02',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.SANITY_WATCH_MODE || !isProd,
        overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS || !isProd,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
