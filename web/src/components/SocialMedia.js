import React from 'react';
import { IconButton } from 'gatsby-theme-material-ui';
import { StaticQuery, graphql } from 'gatsby';
import { Facebook, Twitter, Instagram, Pinterest, LinkedIn, YouTube } from '@material-ui/icons';

const ContactInfo = ({ data }) => {
  const { allSanitySocialInfo: socials } = data;

  return (
    <>
      {socials.edges.map((social) => {
        const iconSelector = (key) => {
          switch (key) {
            case 'facebook':
              return <Facebook />;
            case 'twitter':
              return <Twitter />;
            case 'instagram':
              return <Instagram />;
            case 'pinterest':
              return <Pinterest />;
            case 'linkedin':
              return <LinkedIn />;
            case 'youtube':
              return <YouTube />;

            default:
              return <div>under construction</div>;
          }
        };
        return (
          <IconButton
            color="inherit"
            to={social.node.link}
            target="_blank"
            key={social.node.social}
          >
            {iconSelector(social.node.social)}
          </IconButton>
        );
      })}
    </>
  );
};
export default function Contact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanitySocialInfo {
            edges {
              node {
                _id
                social
                link
              }
            }
          }
        }
      `}
      render={(data) => <ContactInfo data={data} {...props} />}
    />
  );
}
