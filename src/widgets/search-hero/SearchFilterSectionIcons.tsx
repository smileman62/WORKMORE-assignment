import { cn } from '@/shared/lib/cn';

type SearchFilterIconProps = {
  className?: string;
};

/** 지역 — 위치 핀 (참고 UI) */
export function RegionFilterIcon({ className }: SearchFilterIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-5 w-5 shrink-0', className)}
      aria-hidden
    >
      <path
        d="M10 17.2S5.8 14.1 5.8 9.8a4.2 4.2 0 1 1 8.4 0c0 4.3-4.2 7.4-4.2 7.4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="9.8"
        r="1.75"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/** 직업 — 직장인 실루엣 (참고 UI) */
export function SituationFilterIcon({ className }: SearchFilterIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-5 w-5 shrink-0', className)}
      aria-hidden
    >
      <circle
        cx="10"
        cy="6.5"
        r="2.8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 15.8c0-2.4 2-4.3 4.5-4.3s4.5 1.9 4.5 4.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 9.2v2.2l-1.1 2.1h2.2L10 11.4V9.2z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 상품 — 쇼핑백 (참고 UI) */
export function ProductFilterIcon({ className }: SearchFilterIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-5 w-5 shrink-0', className)}
      aria-hidden
    >
      <path
        d="M6.2 8.2h7.6c.7 0 1.2.6 1.1 1.3l-.7 5.4c-.1.5-.5.9-1.1.9H6.9c-.6 0-1-.4-1.1-.9l-.7-5.4c-.1-.7.4-1.3 1.1-1.3z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8.2V6.6c0-1 .9-1.8 2.5-1.8s2.5.8 2.5 1.8v1.6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
