'use client';

import { useRouter } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

import {
  PRODUCT_OPTIONS,
  REGION_OPTIONS,
  SITUATION_OPTIONS,
} from '@/entities/loan-company/model/constants';
import { FilterOptionGroup } from '@/features/search-loan-companies/ui/FilterOptionGroup';
import {
  EMPTY_SEARCH_FILTER,
  formatSearchFilterSummary,
  hasSearchFilter,
  searchFilterToQueryString,
  type SearchFilter,
} from '@/features/search-loan-companies/model/searchFilterTypes';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet/Sheet';

export type LoanSearchFormProps = {
  initialFilter?: SearchFilter;
  className?: string;
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export function LoanSearchForm({
  initialFilter = EMPTY_SEARCH_FILTER,
  className,
}: LoanSearchFormProps) {
  const router = useRouter();
  const [filter, setFilter] = useState<SearchFilter>(initialFilter);
  const [sheetOpen, setSheetOpen] = useState(false);
  const canSearch = hasSearchFilter(filter);

  const handleToggle = (
    key: 'regions' | 'situations' | 'products',
    value: string,
  ) => {
    setFilter((prev) => ({
      ...prev,
      [key]: toggleValue(prev[key], value),
    }));
  };

  const handleReset = () => {
    setFilter(EMPTY_SEARCH_FILTER);
  };

  const handleSearch = () => {
    if (!canSearch) return;
    router.push(`${ROUTES.companies}${searchFilterToQueryString(filter)}`);
  };

  const selectedChips = [
    ...filter.regions.map((v) => ({ type: 'regions' as const, value: v })),
    ...filter.situations.map((v) => ({ type: 'situations' as const, value: v })),
    ...filter.products.map((v) => ({ type: 'products' as const, value: v })),
  ];

  const filterFields = (
    <div className="flex flex-col gap-8">
      <FilterOptionGroup
        label="지역"
        options={REGION_OPTIONS}
        selected={filter.regions}
        onToggle={(v) => handleToggle('regions', v)}
      />
      <FilterOptionGroup
        label="직업"
        options={SITUATION_OPTIONS}
        selected={filter.situations}
        onToggle={(v) => handleToggle('situations', v)}
      />
      <FilterOptionGroup
        label="상품"
        options={PRODUCT_OPTIONS}
        selected={filter.products}
        onToggle={(v) => handleToggle('products', v)}
      />
    </div>
  );

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="hidden flex-col gap-8 md:flex">{filterFields}</div>

      <div className="md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" fullWidth className="h-12">
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
              조건 선택하기
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto pb-8">
            <SheetHeader>
              <SheetTitle>검색 조건</SheetTitle>
              <SheetDescription>
                지역, 직업, 상품을 선택해 업체를 찾아보세요.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">{filterFields}</div>
            <div className="mt-6 flex gap-2">
              <Button variant="outline" fullWidth onClick={handleReset}>
                초기화
              </Button>
              <Button
                variant="primary"
                fullWidth
                disabled={!canSearch}
                onClick={() => {
                  handleSearch();
                  setSheetOpen(false);
                }}
              >
                검색하기
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {selectedChips.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">선택한 조건</p>
          <div className="flex flex-wrap gap-2">
            {selectedChips.map((chip) => (
              <FilterChip
                key={`${chip.type}-${chip.value}`}
                selected
                showRemove
                onRemove={() => handleToggle(chip.type, chip.value)}
              >
                {chip.value}
              </FilterChip>
            ))}
          </div>
        </div>
      )}

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

      <p className="text-center text-xs text-muted-foreground md:hidden">
        모바일에서는 상단 버튼으로 조건을 선택할 수 있어요.
      </p>
    </div>
  );
}
