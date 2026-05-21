'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { CorpCheckForm } from '@/features/check-registered-company/ui/CorpCheckForm';
import type { VerifiedCompanySearchType } from '@/entities/safety/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

function parseSearchType(value: string | null): VerifiedCompanySearchType {
  if (
    value === 'representativeName' ||
    value === 'adPhone' ||
    value === 'businessName'
  ) {
    return value;
  }
  return 'businessName';
}

export function VerifyCompanyPage() {
  const searchParams = useSearchParams();
  const initialType = useMemo(
    () => parseSearchType(searchParams.get('type')),
    [searchParams],
  );
  const initialQuery = useMemo(
    () => searchParams.get('q') ?? searchParams.get('phone') ?? '',
    [searchParams],
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle
          title="정식 업체 조회"
          description="상호명, 대표자명, 광고용 전화번호로 등록 대부업체 여부를 확인하세요."
        />
        <div className="mt-8">
          <CorpCheckForm
            initialType={initialType}
            initialQuery={initialQuery}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
          </Button>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Mock 예시: 상호 &quot;든든금융대부&quot;, 번호 &quot;02-1234-5678&quot;
        </p>
      </div>
    </AppShell>
  );
}
