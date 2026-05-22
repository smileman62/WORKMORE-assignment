import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/lib/cn";

export type BrandLogoProps = {
  href?: string;
  label?: string;
  showText?: boolean;
  size?: number;
  className?: string;
  textClassName?: string;
};

export function BrandLogo({
  href,
  label = "대출나라",
  showText = true,
  size = 32,
  className,
  textClassName,
}: BrandLogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2 mt-1.5", className)}>
      <Image
        src="/brand/logo.png"
        alt=""
        width={size}
        height={size}
        className="shrink-0 object-contain"
        priority
      />
      {showText ? (
        <span
          className={cn("truncate font-bold tracking-tight", textClassName)}
        >
          {label}
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="shrink-0" aria-label={`${label} 홈`}>
        {content}
      </Link>
    );
  }

  return content;
}
