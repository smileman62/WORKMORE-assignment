'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  EMPTY_SEARCH_FILTER,
  formatSearchFilterSummary,
  hasSearchFilter,
  searchFilterToQueryString,
  type SearchFilter,
} from '@/features/search-loan-companies/model/searchFilterTypes';
import { CompanyFilterPanel } from '@/features/search-loan-companies/ui/CompanyFilterPanel';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';

export type LoanSearchFormProps = {
  initialFilter?: SearchFilter;
  className?: string;
};

export function LoanSearchForm({
  initialFilter = EMPTY_SEARCH_FILTER,
  className,
}: LoanSearchFormProps) {
  const router = useRouter();
  const [filter, setFilter] = useState<SearchFilter>(initialFilter);
  const canSearch = hasSearchFilter(filter);

  const handleReset = () => {
    setFilter(EMPTY_SEARCH_FILTER);
  };

  const handleSearch = () => {
    if (!canSearch) return;
    router.push(`${ROUTES.companies}${searchFilterToQueryString(filter)}`);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <CompanyFilterPanel filter={filter} onFilterChange={setFilter} />

      <p className="text-sm text-muted-foreground">
        {canSearch
          ? formatSearchFilterSummary(filter)
          : '지역, 직업, 상품 중 하나 이상을 선택해 주세요.'}
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          variant="outline"
          fullWidth
          onClick={handleReset}
          disabled={!canSearch}
        >
          조건 초기화
        </Button>
        <Button
          variant="primary"
          fullWidth
          disabled={!canSearch}
          onClick={handleSearch}
        >
          업체 검색하기
        </Button>
      </div>
    </div>
  );
}
