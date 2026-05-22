import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

import { LoanResultCalculator } from "@/features/calculate-loan-interest/ui/LoanResultCalculator";
import { getCompanyById } from "@/entities/loan-company/model/mock";
import { CompanyInfoPanel } from "@/entities/loan-company/ui/CompanyInfoPanel";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button/Button";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { SectionTitle } from "@/shared/ui/section-title/SectionTitle";
import { AppShell } from "@/widgets/app-shell/AppShell";
import { CompanyRelatedRecommendations } from "@/widgets/company-related-recommendations/CompanyRelatedRecommendations";

export type CompanyDetailPageProps = {
  companyId: string;
};

export function CompanyDetailPage({ companyId }: CompanyDetailPageProps) {
  const company = getCompanyById(companyId);

  if (!company) {
    notFound();
  }

  const calculatorRateText =
    company.productDetail?.annualInterestRate ?? company.interestRate;
  const calculatorRepaymentText =
    company.productDetail?.repaymentMethod ?? company.repaymentMethod;

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-12 md:py-12 lg:px-8">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {company.name}
            </h1>
            {company.description && (
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {company.description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span>{company.region}</span>
            </div>
            {company.consultationTime && (
              <span>상담 {company.consultationTime}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {company.products.map((product) => (
              <span
                key={product}
                className="rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-foreground"
              >
                {product}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionTitle title="업체 · 상품 정보" />
          <CompanyInfoPanel company={company} />
        </section>

        <section className="mt-10 flex flex-col gap-10">
          <div className="flex min-w-0 flex-col">
            <SectionTitle title="대출 결과 계산기" />
            <LoanResultCalculator
              interestRateText={calculatorRateText}
              repaymentMethodText={calculatorRepaymentText}
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <SectionTitle title="부가 설명" />
            <Card>
              <CardContent className="p-5">
                {company.supplementaryDescription ? (
                  <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                    {company.supplementaryDescription}
                  </p>
                ) : (
                  <p className="text-base text-muted-foreground">
                    등록된 부가 설명이 없습니다.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="mt-10">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.companies}>목록으로 돌아가기</Link>
          </Button>
        </div>
      </div>

      <CompanyRelatedRecommendations company={company} />
    </AppShell>
  );
}
