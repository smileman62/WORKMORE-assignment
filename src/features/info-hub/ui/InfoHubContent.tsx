'use client';

import { useMemo, useState } from 'react';

import { filterArticlesByFinanceTab } from '@/entities/article/lib/filterArticles';
import {
  FINANCE_INFO_TABS,
  type FinanceInfoTab,
} from '@/entities/article/model/constants';
import { mockArticles } from '@/entities/article/model/mock';
import { ArticleListItem } from '@/entities/article/ui/ArticleListItem';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { cn } from '@/shared/lib/cn';

export function InfoHubContent() {
  const [tab, setTab] = useState<FinanceInfoTab>('finance-tip');

  const articles = useMemo(
    () => filterArticlesByFinanceTab(mockArticles, tab),
    [tab],
  );

  return (
    <div className="flex flex-col">
      <div
        className="grid grid-cols-3 gap-2 sm:gap-3"
        role="tablist"
        aria-label="금융정보 카테고리"
      >
        {FINANCE_INFO_TABS.map((item) => {
          const isActive = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(item.id)}
              className={cn(
                'flex min-h-14 items-center justify-center rounded-xl px-2 py-4 text-center text-sm font-semibold transition-colors sm:min-h-16 sm:px-4 sm:text-base',
                isActive
                  ? 'bg-primary-muted text-primary'
                  : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground',
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {articles.length === 0 ? (
        <EmptyState
          className="mt-10"
          title="등록된 글이 없어요"
          description="다른 탭에서 글을 확인해 보세요."
        />
      ) : (
        <ul className="mt-6 md:mt-8" role="tabpanel">
          {articles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ul>
      )}
    </div>
  );
}
