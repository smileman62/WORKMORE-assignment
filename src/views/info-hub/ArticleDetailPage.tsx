import { notFound } from 'next/navigation';

import { getArticleNeighbors } from '@/entities/article/lib/getArticleNeighbors';
import { ARTICLE_CATEGORY_LABELS } from '@/entities/article/model/constants';
import { getArticleById } from '@/entities/article/model/mock';
import { Badge } from '@/shared/ui/badge/Badge';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { ArticleDetailNav } from '@/views/info-hub/ui/ArticleDetailNav';

export type ArticleDetailPageProps = {
  articleId: string;
};

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const article = getArticleById(articleId);

  if (!article) {
    notFound();
  }

  const neighbors = getArticleNeighbors(articleId) ?? {
    prev: null,
    next: null,
  };
  const paragraphs = article.content.split('\n').filter(Boolean);

  return (
    <AppShell>
      <article className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <ArticleDetailNav
          category={article.category}
          neighbors={neighbors}
          placement="top"
        />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge variant="outline">
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </Badge>
          <time
            className="text-sm text-muted-foreground"
            dateTime={article.publishedAt}
          >
            {article.publishedAt}
          </time>
          {article.readMinutes && (
            <span className="text-sm text-muted-foreground">
              · 약 {article.readMinutes}분
            </span>
          )}
        </div>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          {article.title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          {article.summary}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          {paragraphs.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-foreground">
              {para}
            </p>
          ))}
        </div>

        <ArticleDetailNav
          category={article.category}
          neighbors={neighbors}
          placement="bottom"
        />
      </article>
    </AppShell>
  );
}
