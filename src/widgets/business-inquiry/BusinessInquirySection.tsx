import { BusinessInquiryForm } from '@/features/business-inquiry/ui/BusinessInquiryForm';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessInquirySection() {
  return (
    <section id="inquiry" className="scroll-mt-20 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="광고 문의"
          description="패키지·비용·노출 일정을 안내받으세요."
        />
        <div className="mt-6 rounded-xl border border-border bg-background p-5 md:p-6">
          <BusinessInquiryForm />
        </div>
      </div>
    </section>
  );
}
