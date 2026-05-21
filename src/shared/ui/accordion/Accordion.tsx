import { ChevronDown } from 'lucide-react';
import { type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

export type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  return (
    <details
      className={cn(
        'group rounded-xl border border-border bg-background',
        className,
      )}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
        {children}
      </div>
    </details>
  );
}
