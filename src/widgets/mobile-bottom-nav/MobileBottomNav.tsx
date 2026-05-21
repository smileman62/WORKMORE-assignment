'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  Home,
  Newspaper,
  Search,
  Shield,
} from 'lucide-react';

import { cn } from '@/shared/lib/cn';

const NAV_TABS = [
  { label: '홈', href: '/', icon: Home },
  { label: '찾기', href: '/search', icon: Search },
  { label: '안전', href: '/safety', icon: Shield },
  { label: '정보', href: '/info', icon: Newspaper },
  { label: '사업자', href: '/business', icon: Building2 },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] md:hidden"
      aria-label="하단 네비게이션"
    >
      <ul className="flex h-16 items-stretch">
        {NAV_TABS.map((tab) => {
          const isActive =
            tab.href === '/'
              ? pathname === '/'
              : tab.href === '/search'
                ? pathname === '/search' || pathname.startsWith('/companies')
                : tab.href === '/info'
                  ? pathname.startsWith('/info') || pathname === '/support'
                  : pathname.startsWith(tab.href);
          const Icon = tab.icon;

          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                className={cn(
                  'flex h-full flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
