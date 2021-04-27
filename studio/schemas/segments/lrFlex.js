export default {
  name: 'lrSegment',
  title: 'LR - Flex',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'simpleBlockContent',
      title: 'Subtitle',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [{ type: 'simpleBlockContent' }, { type: 'illustration' }, { type: 'video' }],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    },
    {
      name: 'footer',
      title: 'Footer Text',
      type: 'simpleBlockContent',
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          { title: '5:1', value: '10:2' },
          { title: '7:5', value: '7:5' },
          { title: '3:1', value: '9:3' },
          { title: '2:1', value: '8:4' },
          { title: '1:1', value: '6:6' },
          { title: '1:2', value: '4:8' },
          { title: '1:3', value: '3:9' },
          { title: '5:7', value: '5:7' },
          { title: '1:5', value: '2:10' },
        ],
      },
    },
    {
      name: 'reverseOrder',
      type: 'boolean',
      Title: 'Reverse order on stacking?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'blocks',
      subtitle: '_type',
    },
    prepare({ blocks, title, subtitle }) {
      const media = blocks.filter((el) => el._type === 'illustration')[0] || '';

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
