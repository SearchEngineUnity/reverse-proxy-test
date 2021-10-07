import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import { Box } from '@material-ui/core';

function FooterItem({ url, title, isButton }) {
  return (
    <Box my={2}>
      {isButton ? (
        <Button variant="contained" color="primary" to={url}>
          <Box fontSize={14} color="common.white">
            {title}
          </Box>
        </Button>
      ) : (
        <Box fontSize={14} fontWeight="fontWeightBold" color="common.white">
          <Link to={url}>{title}</Link>
        </Box>
      )}
    </Box>
  );
}

export default FooterItem;
