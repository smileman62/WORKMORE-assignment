import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { AppShell } from '@/widgets/app-shell/AppShell';

export default function NotFound() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-foreground">
          공지를 찾을 수 없어요
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          삭제되었거나 잘못된 주소일 수 있습니다.
        </p>
        <Button variant="primary" className="mt-6" asChild>
          <Link href={ROUTES.notice}>공지사항 목록</Link>
        </Button>
      </div>
    </AppShell>
  );
}
