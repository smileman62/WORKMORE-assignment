'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import {
  ARTICLE_CATEGORY_LABELS,
  ARTICLE_CATEGORY_ORDER,
  INFO_HUB_TABS,
  type InfoHubTab,
} from '@/entities/article/model/constants';
import {
  filterArticlesByTab,
  getLatestByCategory,
  getPopularArticles,
  searchArticles,
} from '@/entities/article/lib/filterArticles';
import { mockArticles } from '@/entities/article/model/mock';
import { ArticleCard } from '@/entities/article/ui/ArticleCard';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import { SearchBar } from '@/shared/ui/search-bar/SearchBar';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

const SECTION_PREVIEW_LIMIT = 2;

export function InfoHubContent() {
  const [tab, setTab] = useState<InfoHubTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const byTab = filterArticlesByTab(mockArticles, tab);
    return searchArticles(byTab, searchQuery);
  }, [tab, searchQuery]);

  const popular = useMemo(() => getPopularArticles(mockArticles), []);

  return (
    <div className="flex flex-col gap-8">
      <SearchBar
        placeholder="제목·내용으로 검색"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery('')}
        aria-label="정보 검색"
      />

      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="카테고리"
      >
        {INFO_HUB_TABS.map((item) => (
          <FilterChip
            key={item.id}
            selected={tab === item.id}
            onClick={() => setTab(item.id)}
            role="tab"
            aria-selected={tab === item.id}
            className="shrink-0"
          >
            {item.label}
          </FilterChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="검색 결과가 없어요"
          description="다른 키워드로 검색하거나 카테고리를 바꿔보세요."
        />
      ) : tab === 'all' && !searchQuery.trim() ? (
        <AllCategoriesView articles={filtered} />
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}

      {popular.length > 0 && (
        <section className="border-t border-border pt-8">
          <SectionTitle title="인기글" description="많이 읽은 정보입니다." />
          <ul className="mt-4 flex flex-col gap-3">
            {popular.map((article) => (
              <li key={article.id}>
                <ArticleCard article={article} compact />
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="rounded-xl border border-border bg-surface px-5 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          원하는 답을 찾지 못하셨나요?
        </p>
        <Button variant="outline" size="sm" className="mt-3" asChild>
          <Link href={ROUTES.support}>FAQ · 1:1 문의</Link>
        </Button>
      </div>
    </div>
  );
}

function AllCategoriesView({ articles }: { articles: typeof mockArticles }) {
  return (
    <div className="flex flex-col gap-10">
      {ARTICLE_CATEGORY_ORDER.map((category) => {
        const items = getLatestByCategory(articles, category, SECTION_PREVIEW_LIMIT);
        if (items.length === 0) return null;

        return (
          <section key={category}>
            <h2 className="mb-3 text-base font-semibold text-foreground">
              {ARTICLE_CATEGORY_LABELS[category]}
            </h2>
            <ul className="flex flex-col gap-3">
              {items.map((article) => (
                <li key={article.id}>
                  <ArticleCard article={article} compact />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
