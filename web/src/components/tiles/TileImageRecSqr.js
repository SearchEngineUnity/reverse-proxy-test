import React from 'react';
import { Card } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import CardActionAreaExternal from '../cardActionArea/CardActionAreaExternal';
import CardActionAreaInternalGlobal from '../cardActionArea/CardActionAreaInternalGlobal';
import CardActionAreaInternalLocal from '../cardActionArea/CardActionAreaInternalLocal';
import CardActionAreaJumpLink from '../cardActionArea/CardActionAreaJumpLink';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

function TileImageRecSqr({ image, alt, link }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea
        condition={linkType}
        jumpLink={(children) => (
          <CardActionAreaJumpLink {...link}>{children}</CardActionAreaJumpLink>
        )}
        external={(children) => (
          <CardActionAreaExternal {...link}>{children}</CardActionAreaExternal>
        )}
        internalGlobal={(children) => (
          <CardActionAreaInternalGlobal {...link}>{children}</CardActionAreaInternalGlobal>
        )}
        internalLocal={(children) => (
          <CardActionAreaInternalLocal {...link}>{children}</CardActionAreaInternalLocal>
        )}
      >
        <GatsbyImage image={imageData} alt={alt} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
