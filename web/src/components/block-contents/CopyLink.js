import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { Link as LinkIcon } from '@material-ui/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { makeStyles } from '@material-ui/core/styles';

// Inherit style of Tooltip has a grey background and text is in theme.palette.primary.main
// When using a button within a tool tip, costum tooltip color styling will be inherited by the button
const useStyles = makeStyles((theme) => ({
  tooltip: {
    color: theme.palette.common.white,
  },
  button: {
    color: theme.palette.text.primary,
  },
}));

function CopyLink({ id }) {
  const classes = useStyles();
  const [baseURL, setBaseURL] = useState(null);

  useEffect(() => {
    setBaseURL(window.location.href.split('#')[0]);
  }, [baseURL]);

  return id ? (
    <CopyToClipboard text={`${baseURL}#${id}`}>
      <Tooltip title="Copy link" placement="right" className={classes.tooltip}>
        <IconButton className={classes.button} aria-label="copy link" component="span">
          <LinkIcon />
        </IconButton>
      </Tooltip>
    </CopyToClipboard>
  ) : null;
}
export default CopyLink;
