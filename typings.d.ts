export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  keywords: string;
  author: {
    name: string;
    image: string;
  },
  categories: [array];
  description: string;
  mainImage: {
    asset: {
      url: string
    };
  };
  slug: {
    current: string;
  };
  body: [object];
  name: string;
  avatar: [object];

}