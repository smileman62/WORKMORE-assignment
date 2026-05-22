'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  isSupportNavActive,
  SUPPORT_NAV_ITEMS,
} from '@/widgets/support-layout/model/supportNav';
import { cn } from '@/shared/lib/cn';

export function SupportMobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-border lg:hidden"
      aria-label="고객센터 메뉴"
    >
      <ul className="flex gap-5 overflow-x-auto scrollbar-none">
        {SUPPORT_NAV_ITEMS.map((item) => {
          const isActive = isSupportNavActive(pathname, item.href);

          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={cn(
                  'block whitespace-nowrap border-b-2 px-0.5 pb-3 pt-1 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
