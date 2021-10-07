import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Link } from '@material-ui/core';

function NavPhone({ text, data }) {
  return (
    <>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
        fontWeight="fontWeightBold"
        fontSize="h2.fontSize"
        content="telephone=no"
      >
        {text} {data.sanityCompanyInfo.phone}
      </Box>

      <Box
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}
        fontWeight="fontWeightBold"
        fontSize="h2.fontSize"
      >
        <Link
          href={`tel:+${data.sanityCompanyInfo.phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
        >
          {data.sanityCompanyInfo.phone}
        </Link>
      </Box>
    </>
  );
}

export default function MyNavPhone(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityCompanyInfo {
            phone
          }
        }
      `}
      render={(data) => <NavPhone data={data} {...props} />}
    />
  );
}
