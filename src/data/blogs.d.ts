export type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  popularity: number;
};

export const blogs: Blog[];
export const blogCategories: string[];
