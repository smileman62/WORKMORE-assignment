import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { getArticleListLabel } from '@/entities/article/lib/getArticleListLabel';
import type { ArticleNeighbors } from '@/entities/article/lib/getArticleNeighbors';
import type { Article, ArticleCategory } from '@/entities/article/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

const backLinkClassName =
  'inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground';

type ArticleDetailNavProps = {
  category: ArticleCategory;
  neighbors: ArticleNeighbors;
  placement: 'top' | 'bottom';
};

function NeighborLink({
  type,
  article,
}: {
  type: 'prev' | 'next';
  article: Article;
}) {
  const isPrev = type === 'prev';

  return (
    <Link
      href={ROUTES.infoArticle(article.id)}
      className={cn(
        'group flex w-full min-w-0 flex-col justify-center rounded-xl border border-border bg-background px-4 py-4 transition-colors hover:bg-muted/40',
        isPrev ? 'items-start text-left' : 'items-end text-right',
      )}
    >
      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
        {isPrev ? (
          <>
            <ChevronLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
            이전글
          </>
        ) : (
          <>
            다음글
            <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </>
        )}
      </span>
      <span
        className={cn(
          'mt-2 line-clamp-2 w-full text-sm font-medium leading-snug text-foreground group-hover:text-primary',
          isPrev ? 'text-left' : 'text-right',
        )}
      >
        {article.title}
      </span>
    </Link>
  );
}

export function ArticleDetailNav({
  category,
  neighbors,
  placement,
}: ArticleDetailNavProps) {
  const listLabel = getArticleListLabel(category);
  const listHref = ROUTES.info;

  if (placement === 'top') {
    return (
      <Link href={listHref} className={backLinkClassName}>
        <ChevronLeft className="h-4 w-4" aria-hidden />
        {listLabel} 목록으로
      </Link>
    );
  }

  const hasPrev = Boolean(neighbors.prev);
  const hasNext = Boolean(neighbors.next);

  if (!hasPrev && !hasNext) {
    return null;
  }

  return (
    <nav className="mt-12 border-t border-border pt-8" aria-label="글 이동">
      <div
        className={cn(
          'grid gap-3',
          hasPrev && hasNext ? 'sm:grid-cols-2' : 'grid-cols-1',
        )}
      >
        {neighbors.prev ? (
          <NeighborLink type="prev" article={neighbors.prev} />
        ) : null}
        {neighbors.next ? (
          <NeighborLink type="next" article={neighbors.next} />
        ) : null}
      </div>
    </nav>
  );
}
