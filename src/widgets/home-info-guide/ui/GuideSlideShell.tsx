import type { ReactNode } from 'react';

import type { GuideSlide } from '@/widgets/home-info-guide/model/guideSlides';
import { getGuideSlideLabel } from '@/widgets/home-info-guide/model/guideSlides';
import { cn } from '@/shared/lib/cn';

const SLIDE_HEIGHT =
  'min-h-[350px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]';

type GuideSlideShellProps = {
  slide: GuideSlide;
  children: ReactNode;
  footer?: ReactNode;
};

export function GuideSlideShell({ slide, children, footer }: GuideSlideShellProps) {
  const isSafety = slide.category === 'safety';
  const label = getGuideSlideLabel(slide);

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col rounded-xl p-6 sm:p-8 md:p-10',
        SLIDE_HEIGHT,
        isSafety
          ? 'bg-gradient-to-b from-[#3d3530] via-[#2c2622] to-[#1e1c19] text-white'
          : 'border border-border bg-background text-foreground shadow-sm',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={cn(
            'text-sm font-medium',
            isSafety ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          이용 전 꼭 알아두세요
        </span>
        <span
          className={cn(
            'inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-bold',
            isSafety
              ? 'bg-primary text-primary-foreground'
              : 'bg-primary-muted text-primary',
          )}
        >
          {label}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col md:mt-6">{children}</div>
      {footer ? <div className="mt-5 md:mt-6">{footer}</div> : null}
    </div>
  );
}

export function GuideHighlight({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <span className={onDark ? 'text-primary' : 'font-semibold text-primary'}>
      {children}
    </span>
  );
}
