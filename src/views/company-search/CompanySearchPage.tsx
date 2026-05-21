'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { LoanSearchForm } from '@/features/search-loan-companies/ui/LoanSearchForm';
import { parseSearchFilterFromParams } from '@/features/search-loan-companies/model/searchFilterTypes';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function CompanySearchPage() {
  const searchParams = useSearchParams();
  const initialFilter = useMemo(
    () => parseSearchFilterFromParams(searchParams),
    [searchParams],
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle
          title="내 조건으로 업체 찾기"
          description="지역, 상황, 상품을 선택해 한 번에 검색하세요."
        />
        <div className="mt-8">
          <LoanSearchForm initialFilter={initialFilter} />
        </div>
      </div>
    </AppShell>
  );
}
