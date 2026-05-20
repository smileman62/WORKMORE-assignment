'use client';

import { X } from 'lucide-react';
import { type ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn';

export type FilterChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  onRemove?: () => void;
  showRemove?: boolean;
};

export function FilterChip({
  className,
  selected = false,
  onRemove,
  showRemove = false,
  children,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        selected
          ? 'border-primary bg-primary-muted text-primary'
          : 'border-border bg-background text-foreground hover:bg-muted',
        className,
      )}
      {...props}
    >
      {children}
      {showRemove && onRemove && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }
          }}
          className="rounded-full p-0.5 hover:bg-primary/10"
          aria-label="필터 제거"
        >
          <X className="h-3.5 w-3.5" />
        </span>
      )}
    </button>
  );
}
