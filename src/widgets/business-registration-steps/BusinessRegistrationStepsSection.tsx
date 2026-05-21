import { AD_REGISTRATION_STEPS } from '@/entities/business/model/constants';
import { ProcessSteps } from '@/shared/ui/process-steps/ProcessSteps';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessRegistrationStepsSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="광고 등록 절차"
          description="심사·입금 확인 후 순차적으로 노출이 시작됩니다."
        />
        <div className="mt-6 rounded-xl border border-border bg-background p-5 md:p-6">
          <ProcessSteps steps={AD_REGISTRATION_STEPS} />
        </div>
      </div>
    </section>
  );
}
