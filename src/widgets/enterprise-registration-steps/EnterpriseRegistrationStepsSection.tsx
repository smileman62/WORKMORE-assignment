import { AD_REGISTRATION_STEPS } from '@/entities/business/model/constants';
import { ProcessSteps } from '@/shared/ui/process-steps/ProcessSteps';

export function EnterpriseRegistrationStepsSection() {
  return (
    <section className="px-4 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          광고 등록 절차
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          심사·입금 확인 후 순차적으로 노출이 시작됩니다.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-5 md:p-8">
          <ProcessSteps steps={AD_REGISTRATION_STEPS} />
        </div>
      </div>
    </section>
  );
}
