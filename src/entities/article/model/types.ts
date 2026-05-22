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
  /** 목록·카드용 썸네일 (없으면 이미지 영역 미표시) */
  thumbnailUrl?: string;
  isPopular?: boolean;
  isNew?: boolean;
  readMinutes?: number;
  viewCount?: number;
  likeCount?: number;
};
