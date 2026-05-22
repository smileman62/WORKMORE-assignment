import { Suspense } from "react";

import { CompanyBrowseContent } from "@/features/search-loan-companies/ui/CompanyBrowseContent";
import { AppShell } from "@/widgets/app-shell/AppShell";
import { LoadingState } from "@/shared/ui/loading-state/LoadingState";
import { SectionTitle } from "@/shared/ui/section-title/SectionTitle";

function BrowseFallback() {
  return <LoadingState className="py-16" />;
}

export function CompanyBrowsePage() {
  return (
    <AppShell>
      <div className="bg-surface px-4 py-8 md:py-6">
        <div className="mx-auto w-full max-w-7xl md:px-2 lg:px-0">
          <Suspense fallback={<BrowseFallback />}>
            <CompanyBrowseContent />
          </Suspense>
        </div>
      </div>
    </AppShell>
  );
}
