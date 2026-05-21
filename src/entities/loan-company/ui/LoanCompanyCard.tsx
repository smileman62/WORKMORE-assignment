import Link from 'next/link';

import type { Company } from '@/entities/loan-company/model/types';
import { LoanCompanyBadge } from '@/entities/loan-company/ui/LoanCompanyBadge';
import { LoanCompanyMeta } from '@/entities/loan-company/ui/LoanCompanyMeta';
import { buildVerifyCompanyHref } from '@/entities/safety/lib/safetyLinks';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card/Card';

export type LoanCompanyCardProps = {
  company: Company;
  className?: string;
};

export function LoanCompanyCard({ company, className }: LoanCompanyCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">{company.name}</CardTitle>
          <LoanCompanyBadge
            isAd={company.isAd}
            isRecommended={company.isRecommended}
            isVerifiedAvailable={company.isVerifiedAvailable}
          />
        </div>
        <CardDescription className="text-xs">
          상담 전 등록 여부를 다시 확인하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <LoanCompanyMeta company={company} />
      </CardContent>
      <CardFooter className="flex-col gap-2 sm:flex-row">
        <Button variant="outline" size="sm" fullWidth asChild>
          <Link href={buildVerifyCompanyHref({ businessName: company.name })}>
            등록 확인
          </Link>
        </Button>
        <Button variant="primary" size="sm" fullWidth asChild>
          <Link href={ROUTES.companyDetail(company.id)}>상세 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
