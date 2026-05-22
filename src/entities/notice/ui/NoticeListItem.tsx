import Link from 'next/link';

import type { Article } from '@/entities/article/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { formatNoticeDate } from '@/shared/lib/format';
import { cn } from '@/shared/lib/cn';

export type NoticeListItemProps = {
  notice: Article;
  className?: string;
};

export function NoticeListItem({ notice, className }: NoticeListItemProps) {
  return (
    <li className={cn('border-b border-border', className)}>
      <Link
        href={ROUTES.noticeDetail(notice.id)}
        className="block py-5 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <h2 className="text-base font-semibold leading-snug text-foreground md:text-lg">
          {notice.title}
        </h2>
        <time
          className="mt-2 block text-sm text-muted-foreground"
          dateTime={notice.publishedAt}
        >
          {formatNoticeDate(notice.publishedAt)}
        </time>
      </Link>
    </li>
  );
}
