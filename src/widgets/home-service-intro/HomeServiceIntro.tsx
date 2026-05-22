import Link from "next/link";
import { Plus } from "lucide-react";

import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";

export function HomeServiceIntro() {
  return (
    <section className="bg-background px-4 py-14 md:pb-28">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <div
          className={cn(
            "flex flex-col gap-6 rounded-2xl bg-muted px-5 py-8 md:px-8 md:py-10",
            "sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <div className="flex flex-col gap-1.5 text-left">
            <p className="text-sm font-medium text-primary md:text-base">
              대출나라 마케팅으로 빠르고 효율적으로
            </p>
            <p className="text-xl font-bold leading-snug text-foreground md:text-2xl">
              광고 등록으로 상담 문의를 늘려 보세요
            </p>
          </div>

          <Link
            href={ROUTES.enterpriseInquiry}
            className={cn(
              "inline-flex h-12 shrink-0 items-center justify-center gap-1.5",
              "rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground",
              "transition-colors hover:bg-primary-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            <Plus className="h-4 w-4 shrink-0" aria-hidden />
            광고 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
