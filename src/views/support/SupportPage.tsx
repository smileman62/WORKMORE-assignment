import { ContactSupportForm } from '@/features/contact-support/ui/ContactSupportForm';
import { FaqSection } from '@/features/contact-support/ui/FaqSection';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function SupportPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle
          title="FAQ · 1:1 문의"
          description="자주 묻는 질문을 먼저 확인하고, 필요할 때 문의를 남겨 주세요."
        />

        <div className="mt-10">
          <FaqSection />
        </div>

        <section
          id="contact"
          className="mt-16 scroll-mt-20 border-t border-border pt-10"
        >
          <SectionTitle
            title="1:1 문의"
            description="FAQ에서 해결되지 않았다면 문의를 남겨 주세요."
          />
          <div className="mt-6 rounded-xl border border-border bg-background p-5 md:p-6">
            <ContactSupportForm />
          </div>
        </section>
      </div>
    </AppShell>
  );
}
