import { BusinessInquiryForm } from '@/features/business-inquiry/ui/BusinessInquiryForm';

export function EnterpriseInquirySection() {
  return (
    <section className="px-4 py-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-surface p-5 md:p-8">
          <BusinessInquiryForm />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          전화 상담 · 1599-9687 (평일 10:00 ~ 17:00)
        </p>
      </div>
    </section>
  );
}
