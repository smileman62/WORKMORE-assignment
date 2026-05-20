import Link from 'next/link';

import type { LoanCompany } from '@/entities/loan-company/model/types';
import { LoanCompanyBadge } from '@/entities/loan-company/ui/LoanCompanyBadge';
import { LoanCompanyMeta } from '@/entities/loan-company/ui/LoanCompanyMeta';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card/Card';

export type LoanCompanyCardProps = {
  company: LoanCompany;
  className?: string;
};

export function LoanCompanyCard({ company, className }: LoanCompanyCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">{company.name}</CardTitle>
          <LoanCompanyBadge
            isAdvertised={company.isAdvertised}
            isVerified={company.isVerified}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <LoanCompanyMeta company={company} />
      </CardContent>
      <CardFooter className="flex-col gap-2 sm:flex-row">
        <Button variant="outline" size="sm" fullWidth asChild>
          <Link href="/safety/corp-check">정식 업체 조회</Link>
        </Button>
        <Button variant="primary" size="sm" fullWidth asChild>
          <Link href={`/companies/${company.id}`}>상세 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
