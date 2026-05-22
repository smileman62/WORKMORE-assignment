import {
  ARTICLE_CATEGORY_LABELS,
  FINANCE_INFO_TABS,
} from '@/entities/article/model/constants';
import type { ArticleCategory } from '@/entities/article/model/types';

export function getArticleListLabel(category: ArticleCategory): string {
  const financeTab = FINANCE_INFO_TABS.find((tab) => tab.id === category);
  if (financeTab) return financeTab.label;

  return ARTICLE_CATEGORY_LABELS[category];
}
