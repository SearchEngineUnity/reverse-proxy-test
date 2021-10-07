import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThumbUpOutlined } from '@material-ui/icons';
import TextContent from '../HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.proTip.bgColor,
    borderColor: theme.palette.hlBox.proTip.borderColor,
  },
  icon: {
    color: theme.palette.hlBox.important.iconColor,
    position: 'relative',
    top: theme.spacing(0.5),
    width: theme.typography.h4.lineHeight * 16,
    height: theme.typography.h4.lineHeight * 16,
  },
  text: {
    color: theme.palette.hlBox.proTip.textColor,
  },
}));

function HighlightProTip({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <ThumbUpOutlined className={classes.icon} /> Pro Tip
      </Typography>
      <TextContent blocks={blockContent} />
    </Box>
  );
}

export default HighlightProTip;
