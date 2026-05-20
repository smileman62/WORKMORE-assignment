'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet/Sheet';

const NAV_ITEMS = [
  { label: '업체 찾기', href: '/search' },
  { label: '안전센터', href: '/safety' },
  { label: '금융 정보', href: '/community' },
  { label: '사업자', href: '/business' },
] as const;

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-bold text-foreground"
          aria-label="대출나라 홈"
        >
          대출나라
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="주요 메뉴"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/business/login">로그인</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/search">업체 찾기</Link>
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="메뉴 열기"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1" aria-label="모바일 메뉴">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" fullWidth asChild>
                <Link href="/business/login">로그인</Link>
              </Button>
              <Button variant="primary" fullWidth asChild>
                <Link href="/search">업체 찾기</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
