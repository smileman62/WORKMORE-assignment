import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { AppShell } from '@/widgets/app-shell/AppShell';

export default function NotFound() {
  return (
    <AppShell>
      <EmptyState
        title="업체를 찾을 수 없어요"
        description="주소가 올바른지 확인하거나 목록에서 다시 선택해 주세요."
      >
        <Button variant="primary" asChild>
          <Link href={ROUTES.companies}>업체 목록으로</Link>
        </Button>
      </EmptyState>
    </AppShell>
  );
}
