import { Suspense } from 'react';

import { CompanyResultsContent } from '@/features/search-loan-companies/ui/CompanyResultsContent';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

function ResultsFallback() {
  return <LoadingState className="py-16" />;
}

export function CompanyResultsPage() {
  return (
    <AppShell>
      <div className="bg-surface px-4 py-8 md:py-12">
        <div className="mx-auto w-full max-w-6xl md:px-2 lg:px-0">
          <SectionTitle
            title="업체 검색 결과"
            description="선택한 조건에 맞는 등록 업체 목록입니다."
          />
          <div className="mt-8">
            <Suspense fallback={<ResultsFallback />}>
              <CompanyResultsContent />
            </Suspense>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            UI 미리보기: URL에{' '}
            <code className="rounded bg-muted px-1">?status=loading</code>,{' '}
            <code className="rounded bg-muted px-1">error</code>,{' '}
            <code className="rounded bg-muted px-1">empty</code>를 추가해 상태를
            확인할 수 있어요.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
