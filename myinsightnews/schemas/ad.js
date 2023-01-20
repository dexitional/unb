export default {
  name: 'ad',
  title: 'Ads',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Banner',
      type: 'image',
    },
    {
      name: 'link',
      title: 'URL Link',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position of Ad',
      type: 'string',
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    },
  ],
}
