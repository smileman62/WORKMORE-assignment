import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

import { getNoticeById } from '@/entities/notice/lib/getNotices';
import { ROUTES } from '@/shared/constants/routes';
import { formatNoticeDate } from '@/shared/lib/format';
import { AppShell } from '@/widgets/app-shell/AppShell';

export type NoticeDetailPageProps = {
  noticeId: string;
};

export function NoticeDetailPage({ noticeId }: NoticeDetailPageProps) {
  const notice = getNoticeById(noticeId);

  if (!notice) {
    notFound();
  }

  const paragraphs = notice.content.split('\n').filter(Boolean);

  return (
    <AppShell>
      <article className="bg-background px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href={ROUTES.notice}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            목록으로 돌아가기
          </Link>

          <p className="mt-8 text-sm text-muted-foreground">공지사항</p>
          <h1 className="mt-2 text-2xl font-bold leading-snug text-foreground md:text-3xl">
            {notice.title}
          </h1>
          <time
            className="mt-4 block text-sm text-muted-foreground"
            dateTime={notice.publishedAt}
          >
            {formatNoticeDate(notice.publishedAt)}
          </time>

          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-10">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </AppShell>
  );
}
