import Link from 'next/link';

import type { Article } from '@/entities/article/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { formatNoticeDate } from '@/shared/lib/format';
import { cn } from '@/shared/lib/cn';

export type ArticleListItemProps = {
  article: Article;
  className?: string;
};

export function ArticleListItem({ article, className }: ArticleListItemProps) {
  return (
    <li className={cn('border-b border-border', className)}>
      <Link
        href={ROUTES.infoArticle(article.id)}
        className="flex gap-4 py-5 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold leading-snug text-foreground md:text-lg">
            {article.title}
          </h2>
          {article.summary && (
            <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
              {article.summary}
            </p>
          )}
          <time
            className="mt-2 block text-sm text-muted-foreground"
            dateTime={article.publishedAt}
          >
            {formatNoticeDate(article.publishedAt)}
          </time>
        </div>
        {article.thumbnailUrl ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted md:h-20 md:w-20">
            <img
              src={article.thumbnailUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </Link>
    </li>
  );
}
