'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { mockCompanies } from '@/entities/loan-company/model/mock';
import { CARD_TAB_SLOT } from '@/entities/loan-company/ui/CompanySideTab';
import { LoanCompanyCard } from '@/entities/loan-company/ui/LoanCompanyCard';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

const SCROLL_STEP = 296;

export function HomeCompanyGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScrollState]);

  const scrollByStep = (direction: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;

    const delta = direction === 'next' ? SCROLL_STEP : -SCROLL_STEP;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="bg-surface px-4 py-5 md:py-14">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <SectionTitle
          title="대출업체 살펴보기"
          action={{
            label: '전체 보기',
            href: ROUTES.companies,
            showChevron: false,
          }}
          trailing={
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="h-9 w-9 shrink-0 rounded-lg border border-border/50 bg-background p-0 hover:bg-background active:bg-background"
                onClick={() => scrollByStep('prev')}
                disabled={!canScrollPrev}
                aria-label="이전 업체 보기"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="h-9 w-9 shrink-0 rounded-lg border border-border/50 bg-background p-0 hover:bg-background active:bg-background"
                onClick={() => scrollByStep('next')}
                disabled={!canScrollNext}
                aria-label="다음 업체 보기"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          }
        />

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className={cn(
            'mt-2 flex overflow-x-auto pb-2',
            'scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          )}
        >
          {mockCompanies.map((company) => (
            <div
              key={company.id}
              className={cn(
                'shrink-0',
                CARD_TAB_SLOT.paddingTop,
                CARD_TAB_SLOT.paddingX,
              )}
            >
              <LoanCompanyCard
                company={company}
                variant="grid"
                fixedWidth
                className="h-full overflow-visible"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
