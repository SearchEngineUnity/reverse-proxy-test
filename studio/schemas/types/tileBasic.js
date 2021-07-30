export default {
  name: 'tileBasic',
  title: 'Tile - Basic',
  type: 'object',
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'tileImage',
      title: 'Illustration',
      type: 'illustration',
    },
    {
      name: 'link',
      title: 'Tile link',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'jumpLink' },
      ],
      validation: (Rule) => Rule.length(1).error('Must contain one item'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
