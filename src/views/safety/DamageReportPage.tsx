import Link from 'next/link';

import { DamageReportStepperForm } from '@/features/report-damage/ui/DamageReportStepperForm';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function DamageReportPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle
          title="피해 신고"
          description="피해 사례를 접수해 주세요. 긴급한 위험이 있다면 112·1332로 먼저 연락하세요."
        />
        <div className="mt-8">
          <DamageReportStepperForm />
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
