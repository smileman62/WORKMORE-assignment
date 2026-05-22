"use client";

import { PRODUCT_FILTER_OPTIONS } from "@/entities/loan-company/model/constants";
import { cn } from "@/shared/lib/cn";

const GRID_COLS_CLASS = {
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
} as const;

export type ProductSingleSelectProps = {
  value?: string;
  onChange: (product: string | undefined) => void;
  options?: readonly string[];
  /** 기본 3열. 메인 검색 모달 등 넓은 영역에서는 5~6 권장 */
  columns?: keyof typeof GRID_COLS_CLASS;
  /** columns보다 우선. 예: `grid-cols-4 sm:grid-cols-5 md:grid-cols-6` */
  gridClassName?: string;
  /** false면 legend(상품 라벨) 숨김 — 메인 검색 모달 등 */
  showLegend?: boolean;
  className?: string;
};

export function ProductSingleSelect({
  value,
  onChange,
  options = PRODUCT_FILTER_OPTIONS,
  columns = 3,
  gridClassName,
  showLegend = true,
  className,
}: ProductSingleSelectProps) {
  return (
    <fieldset className={cn('flex flex-col gap-3', className)}>
      {showLegend && (
        <legend className="text-sm font-semibold text-foreground">상품</legend>
      )}
      <div
        className={cn(
          'grid gap-x-2 gap-y-2.5',
          !showLegend && 'pt-0',
          showLegend && 'pt-2',
          gridClassName ?? GRID_COLS_CLASS[columns],
        )}
        role="radiogroup"
        aria-label="상품 선택"
      >
        {options.map((product) => {
          const isSelected = value === product;

          return (
            <button
              key={product}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(isSelected ? undefined : product)}
              className={cn(
                "text-left text-sm leading-snug transition-colors",
                isSelected
                  ? "font-semibold text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {product}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
