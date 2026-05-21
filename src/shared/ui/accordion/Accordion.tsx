import { ChevronDown } from 'lucide-react';
import { type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

export type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  /** sm: 14px, md: 16px 본문 */
  textSize?: 'sm' | 'md';
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
  textSize = 'sm',
}: AccordionItemProps) {
  const isMd = textSize === 'md';
  return (
    <details
      className={cn(
        'group rounded-xl border border-border bg-background',
        className,
      )}
      open={defaultOpen}
    >
      <summary
        className={cn(
          'flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden',
          isMd ? 'text-base' : 'text-sm',
        )}
      >
        {title}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div
        className={cn(
          'border-t border-border px-5 py-4 text-muted-foreground',
          isMd ? 'text-base' : 'text-sm',
        )}
      >
        {children}
      </div>
    </details>
  );
}
