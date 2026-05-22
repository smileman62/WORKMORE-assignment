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

/** 금융정보 페이지 탭 */
export type FinanceInfoTab = 'finance-tip' | 'finance-news' | 'loan-industry-news';

export const FINANCE_INFO_TABS: { id: FinanceInfoTab; label: string }[] = [
  { id: 'finance-tip', label: '금융 팁' },
  { id: 'finance-news', label: '금융 뉴스' },
  { id: 'loan-industry-news', label: '언론사 뉴스' },
];
