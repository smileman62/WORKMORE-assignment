import Link from 'next/link';
import { Eye, ThumbsUp } from 'lucide-react';

import type { Article } from '@/entities/article/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { formatArticleDate } from '@/shared/lib/format';
import { cn } from '@/shared/lib/cn';

export type FinanceNewsPreviewCardProps = {
  article: Article;
  className?: string;
};

export function FinanceNewsPreviewCard({
  article,
  className,
}: FinanceNewsPreviewCardProps) {
  return (
    <Link
      href={ROUTES.infoArticle(article.id)}
      className={cn(
        'flex h-46 w-65 shrink-0 flex-col justify-between rounded-2xl bg-muted p-5 transition-colors',
        'hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
        className,
      )}
    >
      <div className="flex items-start gap-1.5">
        {article.isNew && (
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
            aria-label="새 글"
          >
            N
          </span>
        )}
        <h3 className="line-clamp-3 text-base font-bold leading-snug text-foreground">
          {article.title}
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
        {article.viewCount != null && (
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" aria-hidden />
            <span>{article.viewCount.toLocaleString('ko-KR')}</span>
          </span>
        )}
        {article.likeCount != null && (
          <span className="inline-flex items-center gap-1">
            <ThumbsUp className="h-3.5 w-3.5" aria-hidden />
            <span>{article.likeCount.toLocaleString('ko-KR')}</span>
          </span>
        )}
      </div>
    </Link>
  );
}
