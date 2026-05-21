import { Building2, FileText, MapPin, Phone, User } from 'lucide-react';
import { type ReactNode } from 'react';

import type { Company } from '@/entities/loan-company/model/types';
import { Card, CardContent } from '@/shared/ui/card/Card';

type InfoRowProps = {
  label: string;
  value: string;
  icon?: ReactNode;
  hint?: string;
};

function InfoRow({ label, value, icon, hint }: InfoRowProps) {
  return (
    <div className="flex gap-3 border-b border-border py-3 last:border-0 last:pb-0 first:pt-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-base font-medium text-foreground">{value}</p>
        {hint && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}

type ProductInfoRowProps = {
  label: string;
  value: string;
};

function ProductInfoCell({ label, value }: ProductInfoRowProps) {
  return (
    <div className="rounded-xl bg-muted/40 px-3 py-3">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-base font-medium text-foreground">{value}</p>
    </div>
  );
}

export type CompanyInfoPanelProps = {
  company: Company;
};

export function CompanyInfoPanel({ company }: CompanyInfoPanelProps) {
  const registration = company.registration;
  const product = company.productDetail;

  if (!registration && !product) {
    return null;
  }

  const productItems = [
    product?.monthlyInterestRate && {
      label: '월금리',
      value: product.monthlyInterestRate,
    },
    product?.annualInterestRate && {
      label: '연금리',
      value: product.annualInterestRate,
    },
    product?.loanLimit && { label: '대출한도', value: product.loanLimit },
    product?.overdueInterestRate && {
      label: '연체금리',
      value: product.overdueInterestRate,
    },
    product?.additionalCost && {
      label: '추가비용',
      value: product.additionalCost,
    },
    product?.earlyRepaymentFee && {
      label: '조기상환수수료',
      value: product.earlyRepaymentFee,
    },
    product?.repaymentMethod && {
      label: '상환방식',
      value: product.repaymentMethod,
    },
    product?.loanPeriod && { label: '대출기간', value: product.loanPeriod },
    product?.serviceRegion && {
      label: '지역',
      value: product.serviceRegion,
    },
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
      {registration && (
        <Card className="h-full">
          <CardContent className="p-5">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              업체 정보
            </h3>
            <div>
              {registration.registrationNumber && (
                <InfoRow
                  label="등록번호"
                  value={registration.registrationNumber}
                  icon={<FileText className="h-4 w-4 text-muted-foreground" />}
                />
              )}
              <InfoRow
                label="업체명"
                value={company.name}
                icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
              />
              <InfoRow
                label="연락처"
                value={company.contactNumber}
                hint="대출나라를 보고 연락드렸다고 하시면 상담이 더 수월해집니다."
                icon={<Phone className="h-4 w-4 text-muted-foreground" />}
              />
              {registration.representativeName && (
                <InfoRow
                  label="대표자"
                  value={registration.representativeName}
                  icon={<User className="h-4 w-4 text-muted-foreground" />}
                />
              )}
              {registration.registrationAuthority && (
                <InfoRow
                  label="등록기관"
                  value={
                    registration.registrationAuthorityPhone
                      ? `${registration.registrationAuthority} (${registration.registrationAuthorityPhone})`
                      : registration.registrationAuthority
                  }
                  icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
                />
              )}
              {registration.officeAddress && (
                <InfoRow
                  label="영업소"
                  value={registration.officeAddress}
                  icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {productItems.length > 0 && (
        <Card className="h-full">
          <CardContent className="p-5">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              상품 정보
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {productItems.map((item) => (
                <ProductInfoCell
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
