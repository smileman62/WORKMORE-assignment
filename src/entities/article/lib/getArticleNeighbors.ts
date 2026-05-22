import { getArticleById, mockArticles } from '@/entities/article/model/mock';
import type { Article, ArticleCategory } from '@/entities/article/model/types';

export function getSortedArticlesByCategory(
  category: ArticleCategory,
): Article[] {
  return mockArticles
    .filter((a) => a.category === category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export type ArticleNeighbors = {
  prev: Article | null;
  next: Article | null;
};

/** 최신순 목록 기준: prev=이전글(더 오래된 글), next=다음글(더 최신 글) */
export function getArticleNeighbors(articleId: string): ArticleNeighbors | null {
  const current = getArticleById(articleId);
  if (!current) return null;

  const list = getSortedArticlesByCategory(current.category);
  const index = list.findIndex((a) => a.id === articleId);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index < list.length - 1 ? list[index + 1] : null,
    next: index > 0 ? list[index - 1] : null,
  };
}
