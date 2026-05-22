import { InfoHubContent } from '@/features/info-hub/ui/InfoHubContent';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function InfoHubPage() {
  return (
    <AppShell>
      <div className="bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <InfoHubContent />
        </div>
      </div>
    </AppShell>
  );
}
