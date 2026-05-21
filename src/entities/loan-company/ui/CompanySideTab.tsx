import { BadgeCheck, Star } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

type CompanySideTabProps = {
  tone: 'verified' | 'popular';
  /** TONE_CONFIG.positionClass 덮어쓰기 (예: '-left-3 top-10') */
  className?: string;
};

/**
 * 카드 밖으로 삐져 나오게 하려면:
 * 1. article에 relative (LoanCompanyCard)
 * 2. 내부 카드 본문만 overflow-hidden
 * 3. 조상에 overflow-x-auto 가 있으면 세로/바깥 방향도 잘림 (CSS overflow 연동 규칙)
 *    → HomeCompanyGrid 의 CARD_TAB_SLOT 패딩으로 여유 확보
 */
export const CARD_TAB_SLOT = {
  /** -top-* 등 위로 나가는 뱃지용 (pt-12 ≈ top -2.5rem까지) */
  paddingTop: 'pt-6',
  /** -left-* / -right-* 등 좌우로 나가는 뱃지용 */
  paddingX: 'px-3',
} as const;
export const COMPANY_SIDE_TAB_CONFIG = {
  verified: {
    label: '인증',
    ariaLabel: '인증 업체',
    bg: 'bg-[#3db8a9]',
    text: 'text-white',
    /** article(relative) 기준 — left/top/right/bottom, translate 등 자유롭게 조정 */
    positionClass: 'right-3 bottom-3',
    shapeClass: 'rounded-r-lg rounded-l-md',
    Icon: BadgeCheck,
  },
  popular: {
    label: '인기',
    ariaLabel: '인기 업체',
    bg: 'bg-warning',
    text: 'text-warning-foreground',
    positionClass: 'right-3 bottom-3',
    shapeClass: 'rounded-md',
    Icon: Star,
  },
} as const;

export function CompanySideTab({ tone, className }: CompanySideTabProps) {
  const config = COMPANY_SIDE_TAB_CONFIG[tone];
  const Icon = config.Icon;

  return (
    <div
      className={cn(
        'absolute z-20 flex w-10 flex-col items-center gap-0.5 px-2 py-2.5',
        config.positionClass,
        config.shapeClass,
        config.bg,
        className,
      )}
      aria-label={config.ariaLabel}
    >
      <Icon
        className={cn(
          'h-4 w-4 shrink-0',
          config.text,
          tone === 'popular' && 'fill-current',
        )}
        aria-hidden
      />
      <span className={cn('text-[10px] font-bold leading-none', config.text)}>
        {config.label}
      </span>
    </div>
  );
}
