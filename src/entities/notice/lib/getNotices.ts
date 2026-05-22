import type { Article } from '@/entities/article/model/types';
import { mockArticles } from '@/entities/article/model/mock';

export function getNotices(): Article[] {
  return mockArticles
    .filter((article) => article.category === 'notice')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getNoticeById(id: string): Article | undefined {
  const article = mockArticles.find((item) => item.id === id);
  if (!article || article.category !== 'notice') return undefined;
  return article;
}
