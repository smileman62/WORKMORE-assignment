'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchX } from 'lucide-react';
import { useMemo, useState } from 'react';

import { mockCompanies } from '@/entities/loan-company/model/mock';
import { LoanCompanyCard } from '@/entities/loan-company/ui/LoanCompanyCard';
import {
  filterCompanies,
  sortCompanies,
  type SortOption,
} from '@/features/search-loan-companies/lib/filterCompanies';
import {
  formatSearchFilterSummary,
  parseSearchFilterFromParams,
} from '@/features/search-loan-companies/model/searchFilterTypes';
import { ROUTES } from '@/shared/constants/routes';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { ErrorState } from '@/shared/ui/error-state/ErrorState';
import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select';
import { SafetyCtaRow } from '@/widgets/safety-cta-row/SafetyCtaRow';
import { Button } from '@/shared/ui/button/Button';

export type ListPreviewStatus = 'success' | 'loading' | 'error' | 'empty';

function getPreviewStatus(params: URLSearchParams): ListPreviewStatus {
  const status = params.get('status');
  if (
    status === 'loading' ||
    status === 'error' ||
    status === 'empty'
  ) {
    return status;
  }
  return 'success';
}

export function CompanyResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState<SortOption>('recommended');

  const filter = useMemo(
    () => parseSearchFilterFromParams(searchParams),
    [searchParams],
  );
  const previewStatus = getPreviewStatus(searchParams);

  const filtered = useMemo(() => {
    const list = filterCompanies(mockCompanies, filter);
    return sortCompanies(list, sort);
  }, [filter, sort]);

  const filterQuery = searchParams.toString();
  const searchHref = filterQuery
    ? `${ROUTES.search}?${filterQuery}`
    : ROUTES.search;

  if (previewStatus === 'loading') {
    return <LoadingState message="업체 목록을 불러오는 중이에요" className="py-16" />;
  }

  if (previewStatus === 'error') {
    return (
      <ErrorState
        onRetry={() => router.refresh()}
        className="py-16"
      />
    );
  }

  if (previewStatus === 'empty' || filtered.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title="조건에 맞는 업체를 찾지 못했어요"
        description="지역이나 상품 조건을 조금 넓혀보세요."
        action={{
          label: '조건 다시 선택',
          onClick: () => router.push(ROUTES.search),
        }}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}개</span>
          {' '}업체 · {formatSearchFilterSummary(filter)}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={searchHref}>필터 수정</Link>
          </Button>
          <Select
            value={sort}
            onValueChange={(v) => setSort(v as SortOption)}
          >
            <SelectTrigger className="w-[140px]" aria-label="정렬">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">추천순</SelectItem>
              <SelectItem value="region">지역순</SelectItem>
              <SelectItem value="name">이름순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {filtered.map((company) => (
          <li key={company.id}>
            <LoanCompanyCard company={company} />
          </li>
        ))}
      </ul>

      <SafetyCtaRow variant="compact" />
    </div>
  );
}
