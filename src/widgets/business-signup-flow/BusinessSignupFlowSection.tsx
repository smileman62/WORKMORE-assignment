import Link from 'next/link';

import { SIGNUP_FLOW_STEPS } from '@/entities/business/model/constants';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { ProcessSteps } from '@/shared/ui/process-steps/ProcessSteps';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessSignupFlowSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="회원가입 흐름"
          description="업체 계정 생성 후 광고 신청까지 이어집니다."
        />
        <div className="mt-6">
          <ProcessSteps steps={SIGNUP_FLOW_STEPS} variant="horizontal" />
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="primary" asChild>
            <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
