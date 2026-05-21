import Link from 'next/link';

import { ARTICLE_CATEGORY_LABELS } from '@/entities/article/model/constants';
import type { Article } from '@/entities/article/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Badge } from '@/shared/ui/badge/Badge';

export type ArticleCardProps = {
  article: Article;
  className?: string;
  compact?: boolean;
};

export function ArticleCard({ article, className, compact }: ArticleCardProps) {
  return (
    <Link
      href={ROUTES.infoArticle(article.id)}
      className={cn(
        'flex flex-col gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30 hover:bg-surface',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{ARTICLE_CATEGORY_LABELS[article.category]}</Badge>
        {article.isPopular && <Badge variant="primary">인기</Badge>}
        <time className="text-xs text-muted-foreground" dateTime={article.publishedAt}>
          {article.publishedAt}
        </time>
      </div>
      <h3
        className={cn(
          'font-semibold text-foreground',
          compact ? 'text-sm' : 'text-base',
        )}
      >
        {article.title}
      </h3>
      {!compact && (
        <p className="line-clamp-2 text-sm text-muted-foreground">{article.summary}</p>
      )}
      {article.readMinutes && (
        <span className="text-xs text-muted-foreground">
          약 {article.readMinutes}분 읽기
        </span>
      )}
    </Link>
  );
}
