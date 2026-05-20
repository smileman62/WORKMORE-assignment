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
  };
  className?: string;
  children?: ReactNode;
};

export function SectionTitle({
  title,
  description,
  action,
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className="inline-flex shrink-0 items-center gap-0.5 text-sm font-medium text-primary hover:text-primary-hover"
          >
            {action.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
