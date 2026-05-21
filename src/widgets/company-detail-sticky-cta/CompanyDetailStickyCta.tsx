'use client';

import Link from 'next/link';
import { MessageSquare, Phone } from 'lucide-react';

import type { Company } from '@/entities/loan-company/model/types';
import { buildVerifyCompanyHref } from '@/entities/safety/lib/safetyLinks';
import { Button } from '@/shared/ui/button/Button';

export type CompanyDetailStickyCtaProps = {
  company: Pick<Company, 'id' | 'name' | 'contactNumber' | 'consultationType'>;
};

export function CompanyDetailStickyCta({ company }: CompanyDetailStickyCtaProps) {
  const telHref = `tel:${company.contactNumber.replace(/[^0-9+]/g, '')}`;
  const smsHref = `sms:${company.contactNumber.replace(/[^0-9+]/g, '')}`;

  return (
    <div className="fixed bottom-16 left-0 right-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-2">
        <div className="flex gap-2">
          {(company.consultationType === 'phone' ||
            company.consultationType === 'both') && (
            <Button variant="primary" fullWidth asChild>
              <a href={telHref}>
                <Phone className="h-4 w-4" aria-hidden />
                전화 상담
              </a>
            </Button>
          )}
          {(company.consultationType === 'sms' ||
            company.consultationType === 'both') && (
            <Button variant="outline" fullWidth asChild>
              <a href={smsHref}>
                <MessageSquare className="h-4 w-4" aria-hidden />
                문자 상담
              </a>
            </Button>
          )}
        </div>
        <Button variant="ghost" size="sm" fullWidth asChild>
          <Link
            href={buildVerifyCompanyHref({
              businessName: company.name,
              phone: company.contactNumber,
            })}
          >
            상담 전 등록 확인
          </Link>
        </Button>
      </div>
    </div>
  );
}
