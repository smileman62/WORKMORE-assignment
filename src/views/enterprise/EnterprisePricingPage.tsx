import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { EnterpriseAdPlacementsSection } from '@/widgets/enterprise-ad-placements/EnterpriseAdPlacementsSection';
import { EnterpriseAdProductsSection } from '@/widgets/enterprise-ad-products/EnterpriseAdProductsSection';
import { EnterpriseMetricsSection } from '@/widgets/enterprise-metrics/EnterpriseMetricsSection';
import { EnterprisePageCta } from '@/widgets/enterprise-page-cta/EnterprisePageCta';
import { EnterpriseShell } from '@/widgets/enterprise-shell/EnterpriseShell';

export function EnterprisePricingPage() {
  return (
    <EnterpriseShell>
      <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-12">
        <SectionTitle
          title="가격 안내"
          description="목적에 맞는 광고 패키지와 노출 영역을 확인하세요. 최소 광고비·상세 조건은 가입·검수 후 안내됩니다."
        />
      </div>
      <EnterpriseAdProductsSection />
      <EnterpriseAdPlacementsSection />
      <EnterpriseMetricsSection />
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-surface p-6 md:p-8">
          <p className="text-sm text-muted-foreground md:text-base">
            정확한 견적과 노출 일정은 기업 등록·검수 후 담당자가 안내합니다.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button variant="primary" asChild>
              <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={ROUTES.enterpriseJoin}>기업 등록하기</Link>
            </Button>
          </div>
        </div>
      </section>
      <EnterprisePageCta />
    </EnterpriseShell>
  );
}
