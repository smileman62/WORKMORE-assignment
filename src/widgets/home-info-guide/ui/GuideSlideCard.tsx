import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import type { GuideSlide } from '@/widgets/home-info-guide/model/guideSlides';
import { getGuideSlideLabel } from '@/widgets/home-info-guide/model/guideSlides';
import { cn } from '@/shared/lib/cn';

const SLIDE_HEIGHT =
  'min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[440px]';

type GuideSlideCardProps = {
  slide: GuideSlide;
};

export function GuideSlideCard({ slide }: GuideSlideCardProps) {
  const label = getGuideSlideLabel(slide);
  const titleLines = slide.title.split('\n');

  return (
    <article
      className={cn(
        'relative flex h-full w-full overflow-hidden rounded-2xl',
        SLIDE_HEIGHT,
      )}
    >
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1152px"
        priority={slide.index === 1}
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-[#1e1c19]/95 via-[#1e1c19]/50 to-[#1e1c19]/25"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-medium text-white/75">
            이용 전 꼭 알아두세요
          </span>
          <span className="inline-flex shrink-0 items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {label}
          </span>
        </div>

        <div className="mt-auto max-w-2xl pt-8">
          <h3 className="text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
            {titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            {slide.description}
          </p>
          {slide.cta ? (
            <Link
              href={slide.cta.href}
              className="mt-5 inline-flex items-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              {slide.cta.label}
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
