import { DamageReportStepperForm } from '@/features/report-damage/ui/DamageReportStepperForm';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { SafetyLayout } from '@/widgets/safety-layout/SafetyLayout';

export function DamageReportPage() {
  return (
    <SafetyLayout>
      <SectionTitle
        title="피해 신고"
        description="피해 사례를 접수해 주세요. 긴급한 위험이 있다면 112·1332로 먼저 연락하세요."
      />
      <div className="mt-8">
        <DamageReportStepperForm />
      </div>
    </SafetyLayout>
  );
}
