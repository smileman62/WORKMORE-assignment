import { AppShell } from '@/widgets/app-shell/AppShell';
import { BusinessCta } from '@/widgets/business-cta/BusinessCta';
import { CompanyPreviewSection } from '@/widgets/company-preview/CompanyPreviewSection';
import { InfoHubCta } from '@/widgets/info-hub-cta/InfoHubCta';
import { SafetyBanner } from '@/widgets/safety-banner/SafetyBanner';
import { SafetyCtaRow } from '@/widgets/safety-cta-row/SafetyCtaRow';
import { SearchHero } from '@/widgets/search-hero/SearchHero';
import { SearchWizard } from '@/widgets/search-wizard/SearchWizard';

export function HomePage() {
  return (
    <AppShell>
      <SearchHero />
      <SearchWizard />
      <section className="px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <SafetyCtaRow />
        </div>
      </section>
      <CompanyPreviewSection />
      <SafetyBanner />
      <InfoHubCta />
      <BusinessCta />
    </AppShell>
  );
}
