import { AppShell } from '@/widgets/app-shell/AppShell';
import { HomeCompanyGrid } from '@/widgets/home-company-grid/HomeCompanyGrid';
import { HomeFinanceNews } from '@/widgets/home-finance-news/HomeFinanceNews';
import { HomeInfoGuide } from '@/widgets/home-info-guide/HomeInfoGuide';
import { HomeServiceIntro } from '@/widgets/home-service-intro/HomeServiceIntro';
import { SearchHero } from '@/widgets/search-hero/SearchHero';

export function HomePage() {
  return (
    <AppShell>
      <SearchHero />
      <HomeCompanyGrid />
      <HomeFinanceNews />
      <HomeServiceIntro />
      <HomeInfoGuide />
    </AppShell>
  );
}
