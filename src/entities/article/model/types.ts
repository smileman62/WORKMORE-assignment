export type ArticleCategory =
  | 'guide'
  | 'notice'
  | 'finance-news'
  | 'finance-tip'
  | 'qna'
  | 'loan-industry-news';

export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: ArticleCategory;
  publishedAt: string;
  isPopular?: boolean;
  readMinutes?: number;
};
