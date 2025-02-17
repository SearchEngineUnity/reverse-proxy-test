import React from 'react';
import { CardActionArea } from '@material-ui/core';

function CardActionAreaExternal({ href, children, noreferrer, newTab }) {
  return (
    <CardActionArea
      target={newTab ? '_blank' : ''}
      rel={`${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`}
      href={href}
    >
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaExternal;
