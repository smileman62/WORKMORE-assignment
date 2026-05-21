import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { AppShell } from '@/widgets/app-shell/AppShell';

export default function NotFound() {
  return (
    <AppShell>
      <EmptyState
        title="글을 찾을 수 없어요"
        description="삭제되었거나 주소가 잘못되었을 수 있어요."
      >
        <Button variant="primary" asChild>
          <Link href={ROUTES.info}>정보 허브로</Link>
        </Button>
      </EmptyState>
    </AppShell>
  );
}
