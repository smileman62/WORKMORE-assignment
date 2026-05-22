import Link from 'next/link';

import { SIGNUP_FLOW_STEPS } from '@/entities/business/model/constants';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { ProcessSteps } from '@/shared/ui/process-steps/ProcessSteps';
import { EnterprisePageCta } from '@/widgets/enterprise-page-cta/EnterprisePageCta';
import { EnterpriseRegistrationStepsSection } from '@/widgets/enterprise-registration-steps/EnterpriseRegistrationStepsSection';
import { EnterpriseShell } from '@/widgets/enterprise-shell/EnterpriseShell';

export function EnterpriseJoinPage() {
  return (
    <EnterpriseShell>
      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            title="기업 등록하기"
            description="가입 후 광고 상품 신청·노출 관리가 가능합니다. 정식 등록 대부업체만 이용할 수 있습니다."
          />
          <h2 className="mt-10 text-xl font-bold text-foreground">회원가입 흐름</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            업체 계정 생성 후 광고 신청까지 이어집니다.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-5 md:p-8">
            <ProcessSteps steps={SIGNUP_FLOW_STEPS} variant="horizontal" />
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            전체 가입 폼은 다음 단계에서 연동됩니다. 지금은{' '}
            <Link
              href={ROUTES.enterpriseInquiry}
              className="font-medium text-primary hover:underline"
            >
              광고 문의
            </Link>
            로 상담을 요청해 주세요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <Button variant="primary" asChild>
              <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={ROUTES.enterpriseLogin}>이미 계정이 있어요</Link>
            </Button>
          </div>
        </div>
      </section>

      <EnterpriseRegistrationStepsSection />
      <EnterprisePageCta primaryLabel="광고 문의하기" />
    </EnterpriseShell>
  );
}
