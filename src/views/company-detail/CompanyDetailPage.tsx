import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  MapPin,
  MessageSquare,
  Percent,
  Phone,
  Wallet,
} from 'lucide-react';

import { formatConsultationType } from '@/entities/loan-company/lib/formatConsultation';
import { getCompanyById } from '@/entities/loan-company/model/mock';
import { LoanCompanyBadge } from '@/entities/loan-company/ui/LoanCompanyBadge';
import { ROUTES } from '@/shared/constants/routes';
import { AccordionItem } from '@/shared/ui/accordion/Accordion';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card/Card';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { CompanyDetailStickyCta } from '@/widgets/company-detail-sticky-cta/CompanyDetailStickyCta';
import { SafetyCtaRow } from '@/widgets/safety-cta-row/SafetyCtaRow';

export type CompanyDetailPageProps = {
  companyId: string;
};

export function CompanyDetailPage({ companyId }: CompanyDetailPageProps) {
  const company = getCompanyById(companyId);

  if (!company) {
    notFound();
  }

  const telHref = `tel:${company.contactNumber.replace(/[^0-9+]/g, '')}`;
  const smsHref = `sms:${company.contactNumber.replace(/[^0-9+]/g, '')}`;

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 pb-44 md:pb-12 md:py-12">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-foreground">{company.name}</h1>
            <LoanCompanyBadge
              isAd={company.isAd}
              isRecommended={company.isRecommended}
            />
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            <span>{company.region}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {company.products.map((product) => (
              <span
                key={product}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
              >
                {product}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionTitle title="대출 조건" />
          <Card className="mt-4">
            <CardContent className="flex flex-col gap-4 p-5">
              {company.interestRate && (
                <div className="flex items-start gap-3">
                  <Percent className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">금리</p>
                    <p className="text-sm text-foreground">{company.interestRate}</p>
                  </div>
                </div>
              )}
              {company.loanLimit && (
                <div className="flex items-start gap-3">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">한도</p>
                    <p className="text-sm text-foreground">{company.loanLimit}</p>
                  </div>
                </div>
              )}
              {company.repaymentMethod && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground">상환 방식</p>
                  <p className="text-sm text-foreground">{company.repaymentMethod}</p>
                </div>
              )}
              {company.additionalCost && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground">추가 비용</p>
                  <p className="text-sm text-foreground">{company.additionalCost}</p>
                </div>
              )}
            </CardContent>
          </Card>
          <div className="mt-4 flex flex-col gap-3">
            <AccordionItem title="금리·상환 안내">
              <p>
                표시 금리는 업체 안내 기준이며, 개인 신용·소득·상환 능력에 따라
                달라질 수 있습니다. 상담 시 최종 조건을 반드시 확인하세요.
              </p>
              {company.repaymentMethod && (
                <p className="mt-2">상환: {company.repaymentMethod}</p>
              )}
            </AccordionItem>
          </div>
        </section>

        {company.description && (
          <section className="mt-10">
            <SectionTitle title="업체 소개" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.description}
            </p>
          </section>
        )}

        <section className="mt-10">
          <SectionTitle
            title="상담 전 안전 확인"
            description="상담 전 등록 여부를 반드시 확인하세요."
          />
          <div className="mt-4">
            <SafetyCtaRow
              businessName={company.name}
              contactPhone={company.contactNumber}
            />
          </div>
          <div
            className="mt-4 flex gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3"
            role="note"
          >
            <AlertTriangle className="h-5 w-5 shrink-0 text-warning" aria-hidden />
            <p className="text-sm text-muted-foreground">
              대출나라는 직접 대출하지 않으며, 업체 정보 확인 후 상담을
              진행해야 합니다.
            </p>
          </div>
        </section>

        <section className="mt-10 hidden md:block">
          <SectionTitle title="연락처 및 상담" />
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-base">상담 연락</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-0">
              <p className="text-sm text-muted-foreground">
                {formatConsultationType(company.consultationType)}
                {company.consultationTime && ` · ${company.consultationTime}`}
              </p>
              <p className="text-lg font-semibold text-foreground">
                {company.contactNumber}
              </p>
              <div className="flex gap-2">
                {(company.consultationType === 'phone' ||
                  company.consultationType === 'both') && (
                  <Button variant="primary" asChild>
                    <a href={telHref}>
                      <Phone className="h-4 w-4" aria-hidden />
                      전화 상담
                    </a>
                  </Button>
                )}
                {(company.consultationType === 'sms' ||
                  company.consultationType === 'both') && (
                  <Button variant="outline" asChild>
                    <a href={smsHref}>
                      <MessageSquare className="h-4 w-4" aria-hidden />
                      문자 상담
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 md:hidden">
          <SectionTitle title="연락처" />
          <p className="mt-2 text-lg font-semibold">{company.contactNumber}</p>
          <p className="text-sm text-muted-foreground">
            하단 버튼으로 상담을 연결할 수 있어요.
          </p>
        </section>

        <div className="mt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.companies}>목록으로 돌아가기</Link>
          </Button>
        </div>
      </div>

      <CompanyDetailStickyCta company={company} />
    </AppShell>
  );
}
