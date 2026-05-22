'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { REGION_OPTIONS } from '@/entities/loan-company/model/constants';
import {
  EMPTY_SEARCH_FILTER,
  hasSearchFilter,
  searchFilterToQueryString,
  type SearchFilter,
} from '@/features/search-loan-companies/model/searchFilterTypes';
import { ProductSingleSelect } from '@/features/search-loan-companies/ui/ProductSingleSelect';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export function SearchWizard() {
  const router = useRouter();
  const [filter, setFilter] = useState<SearchFilter>(EMPTY_SEARCH_FILTER);
  const canSearch = hasSearchFilter(filter);

  const handleSearch = () => {
    if (!canSearch) return;
    router.push(`${ROUTES.companies}${searchFilterToQueryString(filter)}`);
  };

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="빠른 조건 선택"
          description="지역과 상품만 골라 바로 결과를 볼 수 있어요."
        />
        <div className="mt-6 flex flex-col gap-6 rounded-xl border border-border bg-background p-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">지역</p>
            <div className="flex flex-wrap gap-2">
              {REGION_OPTIONS.slice(0, 5).map((region) => (
                <FilterChip
                  key={region}
                  selected={filter.regions.includes(region)}
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      regions: toggleValue(prev.regions, region),
                    }))
                  }
                  aria-pressed={filter.regions.includes(region)}
                >
                  {region}
                </FilterChip>
              ))}
            </div>
          </div>
          <ProductSingleSelect
            value={filter.product}
            onChange={(product) =>
              setFilter((prev) => ({
                ...prev,
                product,
              }))
            }
          />
          <Button
            variant="primary"
            fullWidth
            disabled={!canSearch}
            onClick={handleSearch}
          >
            선택한 조건으로 찾기
          </Button>
        </div>
      </div>
    </section>
  );
}
