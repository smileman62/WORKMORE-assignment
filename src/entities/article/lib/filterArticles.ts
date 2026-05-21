import type { Article, ArticleCategory } from '@/entities/article/model/types';
import type { InfoHubTab } from '@/entities/article/model/constants';

export function filterArticlesByTab(
  articles: Article[],
  tab: InfoHubTab,
): Article[] {
  if (tab === 'all') return articles;
  return articles.filter((a) => a.category === tab);
}

export function searchArticles(articles: Article[], query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return articles;
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q),
  );
}

export function getLatestByCategory(
  articles: Article[],
  category: ArticleCategory,
  limit = 3,
): Article[] {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export function getPopularArticles(articles: Article[], limit = 4): Article[] {
  return articles
    .filter((a) => a.isPopular)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
