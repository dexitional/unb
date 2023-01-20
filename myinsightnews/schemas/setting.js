export default {
  name: 'setting',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'site_name',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'site_desc',
      title: 'Site Description',
      type: 'string',
    },
    {
      name: 'site_footnote',
      title: 'Site Footnote',
      type: 'string',
    },
    {
      name: 'mainmenu',
      title: 'Main Navigation',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menu'}}],
    },
    {
      name: 'footmenu',
      title: 'Footer Navigation',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menu'}}],
    },
    {
      name: 'ads',
      title: 'Adverts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'ad'}}],
    },
    {
      name: 'facebookUrl',
      title: 'Facebook Link',
      type: 'string',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram Link',
      type: 'string',
    },
  ],
}


/*

 site_name:`DailyUpdateGh`,
    site_desc:`3news.com is the fastest growing news portal in Ghana. Get all breaking news updates, latest news headlines, local and world stories, showbiz, lifestyle etc.`,
    site_footnote:`© 2022 DailyUpdateGh Media - Developed and managed by K-Soft GH.`,
    menu: [
      { title: 'News', slug:'news', link: '/category/news', visible: true },
      { title: 'Business', slug:'business', link: '/category/business', visible: true },
      { title: 'Entertainment', slug:'showbiz', link: '/category/showbiz', visible: true },
      { title: 'Sports', slug:'sports', link: '/category/sports', visible: true },
      { title: 'World', slug:'world', link: '/category/world', visible: true },
    ],
    socials: {
      facebookUrl:`https://facebook.com/dexitional`,
      twitterUrl: ``,
      instagramUrl: ``,
      youtubeUrl: `https://youtube.com/watch?v=ft43423d`,
    },
    ads: [
      {
        type: 'image',
        path: `https://883921.smushcdn.com/2014168/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-6.36.34-AM-1.jpeg?lossy=1&strip=1&webp=1`,
        link: `https://google.com`,
        location:'header',
        visible: true,
      },
      {
        type: 'image',
        path: `https://883921.smushcdn.com/2014168/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-6.36.34-AM-1.jpeg?lossy=1&strip=1&webp=1`,
        link: `https://google.com`,
        location:'sidebar',
        visible: true,
      }
    ],

*/