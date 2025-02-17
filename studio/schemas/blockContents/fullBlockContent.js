import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { MdLink, MdImage } from 'react-icons/md';
// import InlineImageRenderer from '../components/InlineImageRenderer';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';

export default {
  title: 'Block Content',
  name: 'fullBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            name: 'jumpLink',
            type: 'object',
            title: 'Page Jump Link',
            blockEditor: {
              icon: MdLink,
              render: JumpLinkRenderer,
            },
            fields: [
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the segment you would like to jump to',
              },
            ],
          },
          {
            name: 'internalLocal',
            type: 'object',
            title: 'Internal Local Link',
            blockEditor: {
              icon: FaLink,
              render: InternalLocalRenderer,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'page' }, { type: 'spGuide' }, { type: 'listingPage' }],
              },
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the segment you would like to jump to',
              },
              {
                name: 'parameter',
                title: 'Parameter(s)',
                type: 'string',
                description: 'Please enter all needed parameters for the link',
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            name: 'internalGlobal',
            type: 'object',
            title: 'Internal Global Link',
            blockEditor: {
              icon: GiLinkedRings,
              render: InternalGlobalRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt,
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: true,
              },
              {
                title: 'rel=noreferrer?',
                name: 'noreferrer',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          // {
          //   title: 'Inline Image',
          //   name: 'inlineImage',
          //   type: 'image',
          //   options: {
          //     hotspot: true, // <-- Defaults to false
          //     storeOriginalFilename: true,
          //   },
          //   blockEditor: {
          //     icon: MdImage,
          //     render: InlineImageRenderer,
          //   },
          //   validation: (Rule) => [Rule.required().error('Missing Image')],
          // },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    { type: 'illustration' },
    { type: 'basicTable' },
    { type: 'smartTable' },
    { type: 'highlightBox' },
    { type: 'videoEmbed' },
    { type: 'btnBlockMui' },
  ],
};
