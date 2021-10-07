import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WarningOutlined } from '@material-ui/icons';
import TextContent from '../HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
  },
  icon: {
    color: theme.palette.hlBox.important.iconColor,
    position: 'relative',
    top: theme.spacing(0.5),
    width: theme.typography.h4.lineHeight * 16,
    height: theme.typography.h4.lineHeight * 16,
  },
  text: {
    color: theme.palette.hlBox.warning.textColor,
  },
}));

function HighlightWarning({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <WarningOutlined className={classes.icon} /> Warning
      </Typography>
      <TextContent blocks={blockContent} />
    </Box>
  );
}

export default HighlightWarning;
