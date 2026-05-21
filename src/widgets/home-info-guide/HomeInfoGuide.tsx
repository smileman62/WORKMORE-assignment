'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { GUIDE_SLIDES } from '@/widgets/home-info-guide/model/guideSlides';
import type { GuideSlide } from '@/widgets/home-info-guide/model/guideSlides';
import { GuideSlideCard } from '@/widgets/home-info-guide/ui/GuideSlideCard';
import { cn } from '@/shared/lib/cn';

const AUTOPLAY_INTERVAL_MS = 5000;
const SLIDE_COUNT = GUIDE_SLIDES.length;
const SCROLL_TRANSITION_MS = 500;

function buildLoopSlides(): GuideSlide[] {
  const first = GUIDE_SLIDES[0];
  return [
    ...GUIDE_SLIDES,
    { ...first, id: `${first.id}-loop-clone` },
  ];
}

export function HomeInfoGuide() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isJumpingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const loopSlides = useMemo(() => buildLoopSlides(), []);

  const getScrollIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return 0;
    return Math.round(el.scrollLeft / el.offsetWidth);
  }, []);

  const updateActiveIndex = useCallback(() => {
    if (isJumpingRef.current) return;

    const scrollIndex = getScrollIndex();
    setActiveIndex(scrollIndex % SLIDE_COUNT);
  }, [getScrollIndex]);

  const resetToRealStart = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    isJumpingRef.current = true;
    el.scrollTo({ left: 0, behavior: 'instant' });
    setActiveIndex(0);

    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  }, []);

  const scrollToSlide = useCallback(
    (scrollIndex: number, behavior: ScrollBehavior = 'smooth') => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({
        left: scrollIndex * el.offsetWidth,
        behavior,
      });
    },
    [],
  );

  const handleLoopScrollEnd = useCallback(() => {
    if (getScrollIndex() >= SLIDE_COUNT) {
      resetToRealStart();
    }
  }, [getScrollIndex, resetToRealStart]);

  const goToNextSlide = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return;

    const current = getScrollIndex();
    const next = current + 1;

    scrollToSlide(next, 'smooth');

    if (next >= SLIDE_COUNT) {
      window.setTimeout(handleLoopScrollEnd, SCROLL_TRANSITION_MS);
    }
  }, [getScrollIndex, scrollToSlide, handleLoopScrollEnd]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= SLIDE_COUNT) return;

      const el = scrollRef.current;
      if (!el) return;

      const currentScrollIndex = getScrollIndex();
      if (currentScrollIndex >= SLIDE_COUNT) {
        resetToRealStart();
        requestAnimationFrame(() => scrollToSlide(index, 'smooth'));
        return;
      }

      scrollToSlide(index, 'smooth');
    },
    [getScrollIndex, resetToRealStart, scrollToSlide],
  );

  useEffect(() => {
    updateActiveIndex();
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(updateActiveIndex);
    observer.observe(el);

    const onScrollEnd = () => handleLoopScrollEnd();
    el.addEventListener('scrollend', onScrollEnd);

    return () => {
      observer.disconnect();
      el.removeEventListener('scrollend', onScrollEnd);
    };
  }, [updateActiveIndex, handleLoopScrollEnd]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      if (isPausedRef.current) return;
      goToNextSlide();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [goToNextSlide]);

  const handleManualSelect = (index: number) => {
    isPausedRef.current = true;
    scrollToIndex(index);
    window.setTimeout(() => {
      isPausedRef.current = false;
    }, AUTOPLAY_INTERVAL_MS * 2);
  };

  return (
    <section
      className="bg-surface px-4 py-10 md:py-14"
      aria-roledescription="carousel"
      aria-label="이용 전 꼭 알아두세요"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      onFocusCapture={() => {
        isPausedRef.current = true;
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          isPausedRef.current = false;
        }
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          이용 전 꼭 알아두세요
        </h2>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className={cn(
          'mt-6 flex snap-x snap-mandatory overflow-x-auto',
          'scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        )}
      >
        {loopSlides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index === SLIDE_COUNT ? true : undefined}
            className="w-full min-w-full shrink-0 snap-center snap-always px-4 md:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-6xl">
              <GuideSlideCard slide={slide} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="mx-auto mt-5 flex max-w-6xl justify-center gap-2 px-4"
        role="tablist"
        aria-label="안내 슬라이드"
      >
        {GUIDE_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`${index + 1}번째 안내: ${slide.category === 'safety' ? '안전 확인' : '서비스 안내'}`}
            onClick={() => handleManualSelect(index)}
            className={cn(
              'h-2.5 rounded-full transition-all duration-200',
              activeIndex === index
                ? 'w-8 bg-primary'
                : 'w-2.5 bg-border hover:bg-primary/50',
            )}
          />
        ))}
      </div>
    </section>
  );
}
