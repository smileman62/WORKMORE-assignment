import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { cn } from '@/shared/lib/cn';

export type EnterprisePageCtaProps = {
  className?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function EnterprisePageCta({
  className,
  primaryHref = ROUTES.enterpriseInquiry,
  primaryLabel = '광고 문의하기',
}: EnterprisePageCtaProps) {
  return (
    <div
      className={cn(
        'border-t border-border bg-surface px-4 py-8',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="primary" asChild>
          <Link href={primaryHref}>{primaryLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
