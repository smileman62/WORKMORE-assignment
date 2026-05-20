import { Clock, MapPin } from 'lucide-react';

import type { LoanCompany } from '@/entities/loan-company/model/types';
import { cn } from '@/shared/lib/cn';

export type LoanCompanyMetaProps = {
  company: Pick<LoanCompany, 'region' | 'products' | 'consultationTime'>;
  className?: string;
};

export function LoanCompanyMeta({ company, className }: LoanCompanyMetaProps) {
  return (
    <div className={cn('flex flex-col gap-2 text-sm text-muted-foreground', className)}>
      <div className="flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>{company.region}</span>
      </div>
      {company.consultationTime && (
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>{company.consultationTime}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-1.5">
        {company.products.map((product) => (
          <span
            key={product}
            className="rounded-md bg-muted px-2 py-0.5 text-xs text-foreground"
          >
            {product}
          </span>
        ))}
      </div>
    </div>
  );
}
