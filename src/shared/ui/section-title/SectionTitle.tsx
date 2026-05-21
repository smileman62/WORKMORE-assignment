import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

export type SectionTitleProps = {
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
    /** 기본 true */
    showChevron?: boolean;
  };
  /** 전체 보기 링크 오른쪽에 배치 (예: 캐러셀 버튼) */
  trailing?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function SectionTitle({
  title,
  description,
  action,
  trailing,
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {(action || trailing) && (
          <div className="flex shrink-0 items-center gap-2">
            {action && (
              <Link
                href={action.href}
                className="inline-flex items-center gap-0.5 text-sm font-medium text-primary hover:text-primary-hover"
              >
                {action.label}
                {action.showChevron !== false && (
                  <ChevronRight className="h-4 w-4" aria-hidden />
                )}
              </Link>
            )}
            {trailing}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
