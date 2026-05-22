import { EnterpriseCtaSection } from '@/widgets/enterprise-cta/EnterpriseCtaSection';
import { EnterpriseHero } from '@/widgets/enterprise-hero/EnterpriseHero';
import { EnterprisePlatformStats } from '@/widgets/enterprise-platform-stats/EnterprisePlatformStats';
import { EnterprisePromoBlocks } from '@/widgets/enterprise-promo-blocks/EnterprisePromoBlocks';
import { EnterpriseShell } from '@/widgets/enterprise-shell/EnterpriseShell';

export function EnterpriseServicePage() {
  return (
    <EnterpriseShell>
      <EnterpriseHero />
      <EnterprisePlatformStats />
      <EnterprisePromoBlocks />
      <EnterpriseCtaSection />
    </EnterpriseShell>
  );
}
