import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { EnterpriseFaqSection } from '@/widgets/enterprise-faq/EnterpriseFaqSection';
import { EnterpriseInquirySection } from '@/widgets/enterprise-inquiry/EnterpriseInquirySection';
import { EnterpriseShell } from '@/widgets/enterprise-shell/EnterpriseShell';

export function EnterpriseInquiryPage() {
  return (
    <EnterpriseShell>
      <div className="mx-auto max-w-3xl px-4 pt-10 md:pt-12">
        <SectionTitle
          title="광고 문의"
          description="패키지·비용·노출 일정을 안내받으세요. 영업일 기준 1~2일 내 연락드립니다."
        />
      </div>
      <EnterpriseInquirySection />
      <EnterpriseFaqSection />
    </EnterpriseShell>
  );
}
