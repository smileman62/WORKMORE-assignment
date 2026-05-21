import { InfoHubContent } from '@/features/info-hub/ui/InfoHubContent';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function InfoHubPage() {
  return (
    <AppShell>
      <div className="bg-surface px-4 py-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            title="정보 허브"
            description="이용안내, 공지, 금융 정보를 한곳에서 확인하세요."
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-10">
        <InfoHubContent />
      </div>
    </AppShell>
  );
}
