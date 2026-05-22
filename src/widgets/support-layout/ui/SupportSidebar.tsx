'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  isSupportNavActive,
  SUPPORT_NAV_ITEMS,
} from '@/widgets/support-layout/model/supportNav';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

const STICKY_TOP_CLASS = 'sticky top-14';

export function SupportSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden shrink-0 lg:block lg:w-56 xl:w-60">
      <nav
        className={cn('rounded-2xl p-4', STICKY_TOP_CLASS)}
        aria-label="고객센터 메뉴"
      >
        <p className="px-3 py-2 text-base font-semibold text-foreground">
          고객센터
        </p>

        <ul className="mt-3 flex flex-col gap-0.5">
          {SUPPORT_NAV_ITEMS.map((item) => {
            const isActive = isSupportNavActive(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-muted text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
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
    </aside>
  );
}
