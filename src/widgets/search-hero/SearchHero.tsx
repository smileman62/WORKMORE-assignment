'use client';

import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { type ReactNode, useEffect, useId, useRef, useState } from 'react';

import {
  PRODUCT_FILTER_OPTIONS,
  REGION_FILTER_OPTIONS,
  SITUATION_OPTIONS,
} from '@/entities/loan-company/model/constants';
import {
  EMPTY_SEARCH_FILTER,
  hasSearchFilter,
  searchFilterToQueryString,
  type SearchFilter,
} from '@/features/search-loan-companies/model/searchFilterTypes';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import {
  ProductFilterIcon,
  RegionFilterIcon,
  SituationFilterIcon,
} from '@/widgets/search-hero/SearchFilterSectionIcons';

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

const SELECTED_CONDITION_CHIP_CLASS =
  'border-border bg-background text-foreground shadow-sm [&_span[role=button]]:text-muted-foreground [&_span[role=button]]:hover:bg-muted';

function filterOptionsByQuery(
  options: readonly string[],
  query: string,
): string[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [...options];
  return options.filter((option) =>
    option.toLowerCase().includes(normalized),
  );
}

function SearchOptionPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors sm:text-sm',
        selected
          ? 'border-foreground bg-foreground text-background'
          : 'border-border bg-muted/60 text-foreground hover:bg-muted',
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}

type FilterSectionProps = {
  icon: ReactNode;
  title: string;
  resetLabel: string;
  headingId: string;
  options: readonly string[];
  selected: string[];
  query: string;
  onToggle: (value: string) => void;
  onReset: () => void;
};

function FilterSection({
  icon,
  title,
  resetLabel,
  headingId,
  options,
  selected,
  query,
  onToggle,
  onReset,
}: FilterSectionProps) {
  const visibleOptions = filterOptionsByQuery(options, query);

  return (
    <div className="flex min-h-0 flex-col gap-2.5 p-4">
      <div className="flex items-center justify-between gap-2">
        <h3
          id={headingId}
          className="flex items-center gap-2 text-base font-bold text-foreground"
        >
          {icon}
          {title}
        </h3>
        <button
          type="button"
          onClick={onReset}
          className="shrink-0 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          {resetLabel}
        </button>
      </div>
      <div
        className="flex max-h-52 flex-wrap gap-2 overflow-y-auto pr-1"
        role="group"
        aria-labelledby={headingId}
      >
        {visibleOptions.length > 0 ? (
          visibleOptions.map((option) => (
            <SearchOptionPill
              key={option}
              label={option}
              selected={selected.includes(option)}
              onClick={() => onToggle(option)}
            />
          ))
        ) : (
          <p className="text-xs text-muted-foreground">
            검색어와 일치하는 항목이 없어요.
          </p>
        )}
      </div>
    </div>
  );
}

type SearchFilterPanelProps = {
  filter: SearchFilter;
  query: string;
  regionHeadingId: string;
  productHeadingId: string;
  situationHeadingId: string;
  onToggleRegion: (region: string) => void;
  onToggleProduct: (product: string) => void;
  onToggleSituation: (situation: string) => void;
  onResetRegions: () => void;
  onResetProducts: () => void;
  onResetSituations: () => void;
  onResetAll: () => void;
};

function SearchFilterPanel({
  filter,
  query,
  regionHeadingId,
  productHeadingId,
  situationHeadingId,
  onToggleRegion,
  onToggleProduct,
  onToggleSituation,
  onResetRegions,
  onResetProducts,
  onResetSituations,
  onResetAll,
}: SearchFilterPanelProps) {
  const selectedTags = [
    ...filter.regions.map((v) => ({ type: 'regions' as const, value: v })),
    ...filter.situations.map((v) => ({ type: 'situations' as const, value: v })),
    ...filter.products.map((v) => ({ type: 'products' as const, value: v })),
  ];

  const removeTag = (type: 'regions' | 'situations' | 'products', value: string) => {
    if (type === 'regions') onToggleRegion(value);
    else if (type === 'situations') onToggleSituation(value);
    else onToggleProduct(value);
  };

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-background shadow-lg"
      role="dialog"
      aria-label="검색 조건 선택"
    >
      <div className="flex flex-col md:flex-row">
        <div className="min-w-0 flex-7 border-b border-border md:border-b-0 md:border-r md:border-border">
          <FilterSection
            icon={<RegionFilterIcon className="text-foreground" />}
            title="지역 선택"
            resetLabel="지역 초기화"
            headingId={regionHeadingId}
            options={REGION_FILTER_OPTIONS}
            selected={filter.regions}
            query={query}
            onToggle={onToggleRegion}
            onReset={onResetRegions}
          />
        </div>
        <div className="min-w-0 flex-4">
          <FilterSection
            icon={<SituationFilterIcon className="text-foreground" />}
            title="직업 선택"
            resetLabel="직업 초기화"
            headingId={situationHeadingId}
            options={SITUATION_OPTIONS}
            selected={filter.situations}
            query={query}
            onToggle={onToggleSituation}
            onReset={onResetSituations}
          />
        </div>
      </div>

      <div className="border-t border-border">
        <FilterSection
          icon={<ProductFilterIcon className="text-primary" />}
          title="상품 선택"
          resetLabel="상품 초기화"
          headingId={productHeadingId}
          options={PRODUCT_FILTER_OPTIONS}
          selected={filter.products}
          query={query}
          onToggle={onToggleProduct}
          onReset={onResetProducts}
        />
      </div>

      <div className="flex flex-col gap-1 border-t border-border bg-muted/40 px-4 py-3">
        <div className="flex flex-wrap items-start gap-2">
          <span className="w-full text-sm font-semibold text-muted-foreground">
            선택한 조건
          </span>
          <div className="flex flex-wrap min-h-8.5 items-center gap-2">
            {selectedTags.length === 0 ? (
              <span className="text-sm text-muted-foreground">
                지역·직업·상품을 선택하거나 검색어를 입력해 주세요
              </span>
            ) : (
              selectedTags.map((tag) => (
                <FilterChip
                  key={`${tag.type}-${tag.value}`}
                  showRemove
                  onRemove={() => removeTag(tag.type, tag.value)}
                  className={cn('h-8 text-xs', SELECTED_CONDITION_CHIP_CLASS)}
                >
                  {tag.value}
                </FilterChip>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="button" variant="outline" size="sm" onClick={onResetAll}>
            전체 초기화
          </Button>
        </div>
      </div>
    </div>
  );
}

export function SearchHero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const regionHeadingId = useId();
  const productHeadingId = useId();
  const situationHeadingId = useId();

  const [filter, setFilter] = useState<SearchFilter>(EMPTY_SEARCH_FILTER);
  const [query, setQuery] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const searchFilter: SearchFilter = {
    ...filter,
    keyword: query.trim() || undefined,
  };

  const canSearch = hasSearchFilter(searchFilter);

  const handleSearch = () => {
    if (!canSearch) return;
    setPanelOpen(false);
    router.push(
      `${ROUTES.companies}${searchFilterToQueryString(searchFilter)}`,
    );
  };

  const handleResetAll = () => {
    setFilter(EMPTY_SEARCH_FILTER);
    setQuery('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (!panelOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setPanelOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPanelOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [panelOpen]);

  return (
    <section className="bg-surface px-4 py-10 md:py-14">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-lg flex-col gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              신뢰할 수 있는 대출업체를
              <br />
              <span className="text-primary">빠르게 찾아보세요</span>
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              지역·직업·상품을 선택하거나 검색어를 입력해 업체를 찾아보세요.
            </p>
          </div>

          <div
            className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary-muted md:flex"
            aria-hidden
          >
            <Search className="h-10 w-10 text-primary" />
          </div>
        </div>

        <div ref={containerRef} className="relative mt-8">
          <div className="flex overflow-hidden rounded-xl border border-border bg-background shadow-sm">
            <div className="flex min-h-12 flex-1 items-center gap-2 px-4 md:min-h-14">
              <Search
                className="h-4 w-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPanelOpen(true);
                }}
                onFocus={() => setPanelOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
                placeholder="지역, 상품, 직업 등을 검색하세요"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground md:text-base"
                aria-expanded={panelOpen}
                aria-haspopup="dialog"
                aria-controls={panelOpen ? 'home-search-panel' : undefined}
                aria-label="업체 검색"
              />
            </div>

            <Button
              type="button"
              variant="primary"
              size="lg"
              className="h-12 shrink-0 rounded-none px-6 md:h-14 md:px-8"
              disabled={!canSearch}
              onClick={handleSearch}
            >
              검색
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-12 shrink-0 rounded-none border-l border-border md:h-14"
              onClick={() => setPanelOpen((open) => !open)}
              aria-label={panelOpen ? '검색 조건 닫기' : '검색 조건 열기'}
              aria-expanded={panelOpen}
            >
              {panelOpen ? (
                <ChevronUp className="h-5 w-5" aria-hidden />
              ) : (
                <ChevronDown className="h-5 w-5" aria-hidden />
              )}
            </Button>
          </div>

          {panelOpen && (
            <div
              id="home-search-panel"
              className="absolute left-0 right-0 top-full z-50 mt-2"
            >
              <SearchFilterPanel
                filter={filter}
                query={query}
                regionHeadingId={regionHeadingId}
                productHeadingId={productHeadingId}
                situationHeadingId={situationHeadingId}
                onToggleRegion={(region) =>
                  setFilter((prev) => ({
                    ...prev,
                    regions: toggleValue(prev.regions, region),
                  }))
                }
                onToggleProduct={(product) =>
                  setFilter((prev) => ({
                    ...prev,
                    products: toggleValue(prev.products, product),
                  }))
                }
                onToggleSituation={(situation) =>
                  setFilter((prev) => ({
                    ...prev,
                    situations: toggleValue(prev.situations, situation),
                  }))
                }
                onResetRegions={() =>
                  setFilter((prev) => ({ ...prev, regions: [] }))
                }
                onResetProducts={() =>
                  setFilter((prev) => ({ ...prev, products: [] }))
                }
                onResetSituations={() =>
                  setFilter((prev) => ({ ...prev, situations: [] }))
                }
                onResetAll={handleResetAll}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
