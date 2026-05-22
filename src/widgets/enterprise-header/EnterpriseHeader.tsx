"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { BrandLogo } from "@/shared/ui/brand-logo/BrandLogo";
import { Button } from "@/shared/ui/button/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet/Sheet";

const ENTERPRISE_NAV_ITEMS = [
  { label: "기업 등록하기", href: ROUTES.enterpriseJoin },
  { label: "가격 안내", href: ROUTES.enterprisePricing },
  { label: "광고 문의", href: ROUTES.enterpriseInquiry },
] as const;

export function EnterpriseHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-enterprise-header-border bg-enterprise-header text-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex min-w-0 items-center gap-5 md:gap-8">
          <BrandLogo
            href={ROUTES.enterprise}
            label="대출나라 업체용"
            size={24}
            textClassName="text-sm text-white md:text-base"
          />

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="업체용 메뉴"
          >
            {ENTERPRISE_NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== ROUTES.enterprise &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href={ROUTES.enterpriseJoin}>기업 회원가입</Link>
          </Button>
          <Button
            variant="primary"
            size="sm"
            asChild
            className="bg-primary hover:bg-primary-hover"
          >
            <Link href={ROUTES.enterpriseLogin}>로그인</Link>
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 md:hidden"
              aria-label="메뉴 열기"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>업체용 메뉴</SheetTitle>
            </SheetHeader>
            <nav
              className="mt-6 flex flex-col gap-1"
              aria-label="모바일 업체용 메뉴"
            >
              {ENTERPRISE_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" fullWidth asChild>
                <Link
                  href={ROUTES.enterpriseJoin}
                  onClick={() => setMenuOpen(false)}
                >
                  기업 회원가입
                </Link>
              </Button>
              <Button variant="primary" fullWidth asChild>
                <Link
                  href={ROUTES.enterpriseLogin}
                  onClick={() => setMenuOpen(false)}
                >
                  로그인
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
