import { getNotices } from '@/entities/notice/lib/getNotices';
import { NoticeListItem } from '@/entities/notice/ui/NoticeListItem';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function NoticeListPage() {
  const notices = getNotices();

  return (
    <AppShell>
      <div className="bg-background px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            공지사항
          </h1>

          {notices.length === 0 ? (
            <p className="mt-10 text-sm text-muted-foreground">
              등록된 공지가 없습니다.
            </p>
          ) : (
            <ul className="mt-8 md:mt-10">
              {notices.map((notice) => (
                <NoticeListItem key={notice.id} notice={notice} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </AppShell>
  );
}
