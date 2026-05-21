import type { ArticleCategory } from './types';

export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  guide: '이용안내',
  notice: '공지사항',
  'finance-news': '금융뉴스',
  'finance-tip': '금융TIP',
  qna: '질문과답변',
  'loan-industry-news': '대부업뉴스',
};

export const ARTICLE_CATEGORY_ORDER: ArticleCategory[] = [
  'guide',
  'notice',
  'finance-news',
  'finance-tip',
  'qna',
  'loan-industry-news',
];

export type InfoHubTab = 'all' | ArticleCategory;

export const INFO_HUB_TABS: { id: InfoHubTab; label: string }[] = [
  { id: 'all', label: '전체' },
  ...ARTICLE_CATEGORY_ORDER.map((id) => ({
    id,
    label: ARTICLE_CATEGORY_LABELS[id],
  })),
];
