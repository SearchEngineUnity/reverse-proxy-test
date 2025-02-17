export default {
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      Title: 'Icon',
      type: 'string',
      description:
        'Visit https://fonts.google.com/icons?selected=Material+Icons to search for an icon.',
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'spGuide' }],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nav.slug.current',
    },
  },
};
