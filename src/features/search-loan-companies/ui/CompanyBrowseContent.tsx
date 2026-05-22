"use client";

import { SearchX, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { mockCompanies } from "@/entities/loan-company/model/mock";
import { LoanCompanyCard } from "@/entities/loan-company/ui/LoanCompanyCard";
import {
  filterCompanies,
  sortCompanies,
  type SortOption,
} from "@/features/search-loan-companies/lib/filterCompanies";
import {
  EMPTY_SEARCH_FILTER,
  formatSearchFilterSummary,
  hasSearchFilter,
  parseSearchFilterFromParams,
  searchFilterToQueryString,
  type SearchFilter,
} from "@/features/search-loan-companies/model/searchFilterTypes";
import { CompanyFilterPanel } from "@/features/search-loan-companies/ui/CompanyFilterPanel";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog/Dialog";
import { EmptyState } from "@/shared/ui/empty-state/EmptyState";
import { ErrorState } from "@/shared/ui/error-state/ErrorState";
import { LoadingState } from "@/shared/ui/loading-state/LoadingState";
import { SearchBar } from "@/shared/ui/search-bar/SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select/Select";
import { SafetyCtaRow } from "@/widgets/safety-cta-row/SafetyCtaRow";

/** AppHeader h-14(3.5rem) 기준 */
const STICKY_TOP_CLASS = "top-14";

const STICKY_TOOLBAR_CLASS =
  "sticky z-30 border-b border-border bg-surface/95 backdrop-blur supports-backdrop-filter:bg-surface/90";

const STICKY_SIDEBAR_CLASS =
  "sticky z-20 max-h-[calc(100vh-3.5rem)] overflow-y-auto rounded-2xl border border-border bg-background p-5";

export type ListPreviewStatus = "success" | "loading" | "error" | "empty";

function getPreviewStatus(params: URLSearchParams): ListPreviewStatus {
  const status = params.get("status");
  if (status === "loading" || status === "error" || status === "empty") {
    return status;
  }
  return "success";
}

export function CompanyBrowseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState<SortOption>("recommended");
  const [conditionModalOpen, setConditionModalOpen] = useState(false);
  const [draftFilter, setDraftFilter] = useState(EMPTY_SEARCH_FILTER);
  const [keywordInput, setKeywordInput] = useState(
    () => searchParams.get("q") ?? "",
  );

  const appliedFilter = useMemo(
    () => parseSearchFilterFromParams(searchParams),
    [searchParams],
  );
  const previewStatus = getPreviewStatus(searchParams);

  const filtered = useMemo(() => {
    const list = filterCompanies(mockCompanies, appliedFilter);
    return sortCompanies(list, sort);
  }, [appliedFilter, sort]);

  const applyFilter = useCallback(
    (filter: SearchFilter) => {
      router.replace(`${ROUTES.companies}${searchFilterToQueryString(filter)}`);
    },
    [router],
  );

  const handleSidebarFilterChange = (filter: SearchFilter) => {
    applyFilter(filter);
  };

  const handleModalApply = () => {
    applyFilter(draftFilter);
    setConditionModalOpen(false);
  };

  const handleResetApplied = () => {
    setKeywordInput("");
    applyFilter(EMPTY_SEARCH_FILTER);
  };

  const searchParamsKey = searchParams.toString();

  useEffect(() => {
    const trimmed = keywordInput.trim();
    const timer = window.setTimeout(() => {
      const current = parseSearchFilterFromParams(searchParams);
      const applied = current.keyword?.trim() ?? "";
      if (trimmed === applied) return;
      applyFilter({ ...current, keyword: trimmed || undefined });
    }, 400);

    return () => window.clearTimeout(timer);
  }, [keywordInput, searchParamsKey, searchParams, applyFilter]);

  if (previewStatus === "loading") {
    return (
      <LoadingState message="업체 목록을 불러오는 중이에요" className="py-16" />
    );
  }

  if (previewStatus === "error") {
    return <ErrorState onRetry={() => router.refresh()} className="py-16" />;
  }

  const hasNoMatches = hasSearchFilter(appliedFilter) && filtered.length === 0;

  const resultsToolbar = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="pl-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">
          {filtered.length}개
        </span>{" "}
        업체
        {hasSearchFilter(appliedFilter) && (
          <> · {formatSearchFilterSummary(appliedFilter)}</>
        )}
      </p>

      <div className="flex items-center gap-2">
        <Dialog
          open={conditionModalOpen}
          onOpenChange={(open) => {
            setConditionModalOpen(open);
            if (open) setDraftFilter(appliedFilter);
          }}
        >
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
              조건 수정
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[min(90vh,720px)] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>조건 수정</DialogTitle>
            </DialogHeader>
            <CompanyFilterPanel
              filter={draftFilter}
              onFilterChange={setDraftFilter}
              className="py-2"
            />
            <DialogFooter className="gap-2 sm:gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDraftFilter(EMPTY_SEARCH_FILTER)}
              >
                초기화
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={handleModalApply}
              >
                적용하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="w-[140px]" aria-label="정렬">
            <SelectValue placeholder="정렬" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">추천순</SelectItem>
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="name">이름순</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const resultsGrid = (
    <ul
      className={cn(
        "grid grid-cols-1 gap-4",
        "sm:grid-cols-2",
        "lg:grid-cols-2",
        "xl:grid-cols-3",
      )}
    >
      {filtered.map((company) => (
        <li key={company.id} className="min-w-0">
          <LoanCompanyCard
            company={company}
            variant="grid"
            className="h-full overflow-visible"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <div className="min-w-0 flex-1">
        <div
          className={cn(
            STICKY_TOOLBAR_CLASS,
            STICKY_TOP_CLASS,
            "mx-4 space-y-3 px-4 py-4 md:mx-0 md:px-0",
          )}
        >
          <SearchBar
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onClear={() => {
              setKeywordInput("");
              applyFilter({ ...appliedFilter, keyword: undefined });
            }}
            placeholder="업체명·지역·상품으로 검색"
            aria-label="업체 검색"
          />
          {resultsToolbar}
        </div>

        {hasNoMatches ? (
          <EmptyState
            icon={SearchX}
            title="조건에 맞는 업체를 찾지 못했어요"
            description="지역이나 상품 조건을 조금 넓혀보세요."
            action={{
              label: "조건 수정",
              onClick: () => setConditionModalOpen(true),
            }}
            className="mt-6"
          />
        ) : (
          <div className="mt-6 px-1 flex flex-col gap-6">
            {resultsGrid}
            <SafetyCtaRow variant="compact" />
          </div>
        )}
      </div>

      <aside className="hidden mt-3.5 shrink-0 lg:block lg:w-72 xl:w-80">
        <div className={cn(STICKY_SIDEBAR_CLASS, STICKY_TOP_CLASS)}>
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-foreground">
              검색 조건
            </h2>
            <button
              type="button"
              onClick={handleResetApplied}
              disabled={!hasSearchFilter(appliedFilter)}
              className="shrink-0 text-xs text-muted-foreground transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-50"
            >
              조건 초기화
            </button>
          </div>
          <div className="mt-6">
            <CompanyFilterPanel
              filter={appliedFilter}
              onFilterChange={handleSidebarFilterChange}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

/** @deprecated CompanyBrowseContent 사용 */
export const CompanyResultsContent = CompanyBrowseContent;
