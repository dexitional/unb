export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'order',
      title: 'Menu Order',
      type: 'number',
    },
    {
      name: 'subcats',
      title: 'Sub-Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'is-section',
      title: 'Sub-section ?',
      type: 'string',
      options: ['yes','no'],
    },
    {
      name: 'is-topic',
      title: 'Topic ?',
      type: 'string',
      options: ['yes','no'],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
