import { AppShell } from '@/widgets/app-shell/AppShell';
import { HomeCompanyGrid } from '@/widgets/home-company-grid/HomeCompanyGrid';
import { HomeInfoGuide } from '@/widgets/home-info-guide/HomeInfoGuide';
import { SearchHero } from '@/widgets/search-hero/SearchHero';

export function HomePage() {
  return (
    <AppShell>
      <SearchHero />
      <HomeCompanyGrid />
      <HomeInfoGuide />
    </AppShell>
  );
}
