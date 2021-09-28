const path = require('path');

// create all structured pages
async function createStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/structuredPage.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

// create all listing pages
async function createListingPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityListingPage {
        edges {
          node {
            slug {
              current
            }
            sections {
              ... on SanityListingSection {
                _key
                _type
                count
                listType
              }
            }
          }
        }
      }
      allSanitySpGuide {
        totalCount
      }
    }
  `);

  const pages = data.allSanityListingPage.edges;
  pages.forEach((page) => {
    const { listType } = page.node.sections.filter(
      (section) => section._type === 'listingSection',
    )[0];
    const numPerPage = page.node.sections.filter((section) => section._type === 'listingSection')[0]
      .count;
    let totalCount;
    switch (listType) {
      case 'SPG':
        totalCount = data.allSanitySpGuide.totalCount;
        break;

      default:
        break;
    }
    const numPages = Math.ceil(totalCount / numPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/${page.node.slug.current}` : `/${page.node.slug.current}/${i + 1}`,
        component: path.resolve(`./src/templates/listingPage.js`),
        context: {
          listType,
          limit: numPerPage,
          skip: i * numPerPage,
          numPages,
          currentpage: i + 1,
          slug: page.node.slug.current,
        },
      });
    });
  });
}

// create individual guides
async function createGuide(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanitySpGuide {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanitySpGuide.edges;
  guides.forEach((guide) => {
    actions.createPage({
      path: `/blog/${guide.node.slug.current}`,
      component: path.resolve(`./src/templates/spGuide.js`),
      context: {
        slug: guide.node.slug.current,
      },
    });
  });
}

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createStructuredPages(actions, graphql);
  await createListingPages(actions, graphql);
  await createGuide(actions, graphql);
  await createPageRedirects(actions, graphql);
};
