import { AppShell } from '@/widgets/app-shell/AppShell';
import { BusinessAdPlacementsSection } from '@/widgets/business-ad-placements/BusinessAdPlacementsSection';
import { BusinessAdProductsSection } from '@/widgets/business-ad-products/BusinessAdProductsSection';
import { BusinessCtaBar } from '@/widgets/business-cta-bar/BusinessCtaBar';
import { BusinessFaqSection } from '@/widgets/business-faq/BusinessFaqSection';
import { BusinessHero } from '@/widgets/business-hero/BusinessHero';
import { BusinessInquirySection } from '@/widgets/business-inquiry/BusinessInquirySection';
import { BusinessMetricsSection } from '@/widgets/business-metrics/BusinessMetricsSection';
import { BusinessRegistrationStepsSection } from '@/widgets/business-registration-steps/BusinessRegistrationStepsSection';
import { BusinessSignupFlowSection } from '@/widgets/business-signup-flow/BusinessSignupFlowSection';

export function BusinessPage() {
  return (
    <AppShell>
      <BusinessHero />
      <BusinessAdProductsSection />
      <BusinessAdPlacementsSection />
      <BusinessRegistrationStepsSection />
      <BusinessMetricsSection />
      <BusinessSignupFlowSection />
      <BusinessInquirySection />
      <BusinessFaqSection />
      <BusinessCtaBar />
    </AppShell>
  );
}
