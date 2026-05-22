import { ContactSupportForm } from '@/features/contact-support/ui/ContactSupportForm';
import { SupportLayout } from '@/widgets/support-layout/SupportLayout';

export function SupportInquiryPage() {
  return (
    <SupportLayout>
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        1:1 문의
      </h1>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">
        FAQ에서 해결되지 않았다면 문의를 남겨 주세요. 영업일 기준 순차
        답변드립니다.
      </p>
      <div className="mt-6 rounded-2xl border border-border bg-background p-5 md:mt-8 md:p-6">
        <ContactSupportForm />
      </div>
    </SupportLayout>
  );
}
