'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  isSafetyNavActive,
  SAFETY_NAV_ITEMS,
} from '@/widgets/safety-layout/model/safetyNav';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

const MOBILE_NAV_ITEMS = [
  { label: '안내', href: ROUTES.safety },
  ...SAFETY_NAV_ITEMS,
] as const;

export function SafetyMobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-border lg:hidden"
      aria-label="안전센터 메뉴"
    >
      <ul className="flex gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {MOBILE_NAV_ITEMS.map((item) => {
          const isActive =
            item.href === ROUTES.safety
              ? pathname === ROUTES.safety
              : isSafetyNavActive(pathname, item.href);

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
