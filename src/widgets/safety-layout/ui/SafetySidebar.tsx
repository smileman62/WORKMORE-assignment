"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isSafetyNavActive,
  SAFETY_NAV_ITEMS,
} from "@/widgets/safety-layout/model/safetyNav";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";

const STICKY_TOP_CLASS = "top-14";

export function SafetySidebar() {
  const pathname = usePathname();
  const isHome = pathname === ROUTES.safety;

  return (
    <aside className="hidden shrink-0 lg:block lg:w-56 xl:w-60">
      <nav className={cn("p-4", STICKY_TOP_CLASS)} aria-label="안전센터 메뉴">
        <Link
          href={ROUTES.safety}
          className={cn(
            "block rounded-lg px-3 py-2 text-base font-semibold transition-colors",
            isHome
              ? "bg-primary-muted text-primary"
              : "text-foreground hover:bg-muted",
          )}
        >
          안전센터
        </Link>

        <ul className="mt-3 flex flex-col gap-0.5">
          {SAFETY_NAV_ITEMS.map((item) => {
            const isActive = isSafetyNavActive(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-muted text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
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
