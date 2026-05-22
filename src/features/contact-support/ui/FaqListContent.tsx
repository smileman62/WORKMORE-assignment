'use client';

import { useEffect, useMemo, useState } from 'react';

import { filterFaqs, paginateFaqs } from '@/entities/faq/lib/filterFaqs';
import { getFaqs } from '@/entities/faq/lib/getFaqs';
import type { FaqAudience } from '@/entities/faq/model/types';
import { FaqListItem } from '@/entities/faq/ui/FaqListItem';
import { cn } from '@/shared/lib/cn';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { SearchBar } from '@/shared/ui/search-bar/SearchBar';

const FAQ_PAGE_SIZE = 8;

const FAQ_AUDIENCE_TABS: { id: FaqAudience; label: string }[] = [
  { id: 'customer', label: '일반고객 FAQ' },
  { id: 'company', label: '대출업체 FAQ' },
];

export function FaqListContent() {
  const [audience, setAudience] = useState<FaqAudience>('customer');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      filterFaqs(getFaqs(), {
        audience,
        query: searchQuery,
      }),
    [audience, searchQuery],
  );

  const { items, page: safePage, totalPages, totalCount } = useMemo(
    () => paginateFaqs(filtered, page, FAQ_PAGE_SIZE),
    [filtered, page],
  );

  useEffect(() => {
    setPage(1);
  }, [audience, searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        placeholder="궁금한 내용을 검색해 보세요"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery('')}
        aria-label="FAQ 검색"
      />

      <div
        className="grid grid-cols-2 gap-2 sm:gap-3"
        role="tablist"
        aria-label="FAQ 대상"
      >
        {FAQ_AUDIENCE_TABS.map((tab) => {
          const isActive = audience === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setAudience(tab.id)}
              className={cn(
                'flex min-h-14 items-center justify-center rounded-xl px-2 py-4 text-center text-sm font-semibold transition-colors sm:min-h-16 sm:px-4 sm:text-base',
                isActive
                  ? 'bg-primary-muted text-primary'
                  : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground',
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="검색 결과가 없어요"
          description="다른 키워드로 검색하거나 1:1 문의를 이용해 주세요."
        />
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            총 {totalCount}건 · {safePage}/{totalPages}페이지
          </p>
          <ul>
            {items.map((faq) => (
              <FaqListItem key={faq.id} faq={faq} />
            ))}
          </ul>
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-4"
          />
        </>
      )}
    </div>
  );
}
