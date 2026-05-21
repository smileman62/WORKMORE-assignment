import { MapPin, Percent, Phone, Wallet } from 'lucide-react';

import { formatConsultationType } from '@/entities/loan-company/lib/formatConsultation';
import type { Company } from '@/entities/loan-company/model/types';
import { cn } from '@/shared/lib/cn';

export type LoanCompanyMetaProps = {
  company: Pick<
    Company,
    | 'region'
    | 'products'
    | 'loanLimit'
    | 'interestRate'
    | 'consultationType'
    | 'consultationTime'
  >;
  className?: string;
  showRates?: boolean;
};

export function LoanCompanyMeta({
  company,
  className,
  showRates = true,
}: LoanCompanyMetaProps) {
  return (
    <div className={cn('flex flex-col gap-2.5 text-sm text-muted-foreground', className)}>
      <div className="flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>{company.region}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>{formatConsultationType(company.consultationType)}</span>
        {company.consultationTime && (
          <span className="text-xs">· {company.consultationTime}</span>
        )}
      </div>
      {showRates && company.loanLimit && (
        <div className="flex items-center gap-1.5">
          <Wallet className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>한도 {company.loanLimit}</span>
        </div>
      )}
      {showRates && company.interestRate && (
        <div className="flex items-center gap-1.5">
          <Percent className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>금리 {company.interestRate}</span>
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
