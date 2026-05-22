import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import type { FaqItem } from '@/entities/faq/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

export type FaqListItemProps = {
  faq: FaqItem;
  className?: string;
};

export function FaqListItem({ faq, className }: FaqListItemProps) {
  return (
    <li className={cn('border-b border-border', className)}>
      <Link
        href={ROUTES.supportFaqDetail(faq.id)}
        className="flex items-center justify-between gap-3 py-5 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span className="min-w-0 flex-1 text-base font-medium leading-snug text-foreground md:text-lg">
          {faq.question}
        </span>
        <ChevronRight
          className="h-5 w-5 shrink-0 text-muted-foreground"
          aria-hidden
        />
      </Link>
    </li>
  );
}
