import React from 'react';
import { Button, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { determinColor } from '../../lib/helperFunctions';

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: (props) => props.padding,
    '&:hover': {
      color: (props) => props.contrastTextColor,
      'text-decoration': 'none',
    },
    '&:focus': {
      color: (props) => props.contrastTextColor,
      'text-decoration': 'none',
    },
  },
}));

function ButtonExternal({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determinColor(main?.color);
  const darkColor = determinColor(dark?.color);
  const contrastTextColor = determinColor(contrastText?.color);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
    // overrides: {
    //   MuiButton: {
    //     root: {
    //       color: 'green',
    //       '&:hover': {
    //         color: 'green',
    //         'text-decoration': 'none',
    //       },
    //       '&:focus': {
    //         color: contrastTextColor,
    //         'text-decoration': 'none',
    //       },
    //     },
    //   },
    // },
    shape: {
      borderRadius: borderRadius || '4px',
    },
    typography: {
      button: {
        fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.fontWeight || 500,
        fontSize: typography?.fontSize || '0.875rem',
        lineHeight: typography?.lineHeight || 1.75,
        letterSpacing: typography?.letterSpacing || '0.02857em',
        textTransform: 'none',
      },
    },
  });

  const classes = useStyles({ padding, contrastTextColor });
  const { href, newTab, noreferrer } = link[0];

  const style = {
    ':hover': {
      color: 'white',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign={alignment} py={3}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          className={classes.btn}
          target={newTab ? '_blank' : ''}
          rel={`${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`}
          href={href}
          style={style}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default ButtonExternal;
