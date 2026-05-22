'use client';

import {
  REGION_OPTIONS,
  SITUATION_OPTIONS,
} from '@/entities/loan-company/model/constants';
import type { SearchFilter } from '@/features/search-loan-companies/model/searchFilterTypes';
import { FilterOptionGroup } from '@/features/search-loan-companies/ui/FilterOptionGroup';
import { ProductSingleSelect } from '@/features/search-loan-companies/ui/ProductSingleSelect';
import { cn } from '@/shared/lib/cn';

export type CompanyFilterPanelProps = {
  filter: SearchFilter;
  onFilterChange: (filter: SearchFilter) => void;
  className?: string;
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export function CompanyFilterPanel({
  filter,
  onFilterChange,
  className,
}: CompanyFilterPanelProps) {
  const handleToggle = (
    key: 'regions' | 'situations',
    value: string,
  ) => {
    onFilterChange({
      ...filter,
      [key]: toggleValue(filter[key], value),
    });
  };

  return (
    <div className={cn('flex flex-col gap-8', className)}>
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
      <ProductSingleSelect
        value={filter.product}
        onChange={(product) =>
          onFilterChange({
            ...filter,
            product,
          })
        }
      />
    </div>
  );
}
