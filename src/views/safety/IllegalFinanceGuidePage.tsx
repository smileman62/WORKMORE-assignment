import { IllegalFinanceGuideTabs } from '@/features/illegal-finance-guide/ui/IllegalFinanceGuideTabs';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { SafetyLayout } from '@/widgets/safety-layout/SafetyLayout';

export function IllegalFinanceGuidePage() {
  return (
    <SafetyLayout>
      <SectionTitle
        title="불법 금융 대응 가이드"
        description="유형별로 확인할 포인트와 대응 순서를 안내합니다. 당황하지 않고 차근차근 확인하세요."
      />
      <div className="mt-8">
        <IllegalFinanceGuideTabs />
      </div>
    </SafetyLayout>
  );
}
