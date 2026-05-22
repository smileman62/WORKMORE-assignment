import Link from "next/link";

import type { SafetyActionCard as SafetyActionCardData } from "@/widgets/safety-home/model/safetyHomeContent";
import { cn } from "@/shared/lib/cn";

export type SafetyActionCardProps = {
  item: SafetyActionCardData;
  featured?: boolean;
  className?: string;
};

export function SafetyActionCard({
  item,
  featured = false,
  className,
}: SafetyActionCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl bg-[#0220470d] px-3 py-4 text-center transition-colors",
        "hover:bg-[#02204715] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        featured ? "min-h-28 w-full" : "min-h-32",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-2xl",
          featured ? "h-12 w-12" : "h-11 w-11",
          item.iconWrapClassName,
        )}
      >
        <Icon
          className={cn(featured ? "h-6 w-6" : "h-5 w-5", item.iconClassName)}
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "mt-3 font-medium text-foreground",
          featured ? "text-base" : "text-sm leading-snug",
        )}
      >
        {item.label}
      </span>
    </Link>
  );
}
