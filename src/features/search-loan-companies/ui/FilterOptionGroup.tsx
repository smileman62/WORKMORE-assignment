'use client';

import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import { cn } from '@/shared/lib/cn';

export type FilterOptionGroupProps = {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
};

export function FilterOptionGroup({
  label,
  options,
  selected,
  onToggle,
  className,
}: FilterOptionGroupProps) {
  return (
    <fieldset className={cn('flex flex-col gap-3', className)}>
      <legend className="text-sm font-semibold text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <FilterChip
              key={option}
              selected={isSelected}
              onClick={() => onToggle(option)}
              aria-pressed={isSelected}
            >
              {option}
            </FilterChip>
          );
        })}
      </div>
    </fieldset>
  );
}
