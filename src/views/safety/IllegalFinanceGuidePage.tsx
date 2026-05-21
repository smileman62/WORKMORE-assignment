import Link from 'next/link';

import { IllegalFinanceGuideTabs } from '@/features/illegal-finance-guide/ui/IllegalFinanceGuideTabs';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function IllegalFinanceGuidePage() {
  return (
    <AppShell>
      <div className="bg-surface px-4 py-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            title="불법금융 대응 가이드"
            description="유형별로 확인할 포인트와 대응 순서를 안내합니다. 당황하지 않고 차근차근 확인하세요."
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-10">
        <IllegalFinanceGuideTabs />
        <div className="mt-10 flex justify-center border-t border-border pt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
