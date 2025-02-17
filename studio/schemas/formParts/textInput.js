export default {
  name: 'textInput',
  type: 'object',
  title: 'Text Input',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Id Tag',
      description: 'Give one string to identify this field',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
    },
    {
      name: 'placeholderText',
      title: 'Placeholder Text',
      type: 'string',
    },
    {
      name: 'inputType',
      title: 'Input Type',
      type: 'string',
      options: {
        list: ['text', 'email', 'tel', 'url'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
};
