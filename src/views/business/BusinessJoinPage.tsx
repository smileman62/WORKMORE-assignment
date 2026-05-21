import Link from 'next/link';

import { SIGNUP_FLOW_STEPS } from '@/entities/business/model/constants';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { ProcessSteps } from '@/shared/ui/process-steps/ProcessSteps';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function BusinessJoinPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <SectionTitle
          title="업체 회원가입"
          description="가입 후 광고 상품 신청·노출 관리가 가능합니다. (실제 가입 API 연동 전 안내)"
        />
        <div className="mt-8 rounded-xl border border-border bg-surface p-5 md:p-6">
          <ProcessSteps steps={SIGNUP_FLOW_STEPS} variant="horizontal" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          전체 가입 폼은 다음 단계에서 연동됩니다. 지금은{' '}
          <Link href={ROUTES.businessInquiry} className="font-medium text-primary hover:underline">
            광고 문의
          </Link>
          로 상담을 요청해 주세요.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          <Button variant="primary" asChild>
            <Link href={ROUTES.businessInquiry}>광고문의하기</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.businessLogin}>이미 계정이 있어요</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.business}>사업자 안내로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
