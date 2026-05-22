'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { CorpCheckForm } from '@/features/check-registered-company/ui/CorpCheckForm';
import type { VerifiedCompanySearchType } from '@/entities/safety/model/types';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { SafetyLayout } from '@/widgets/safety-layout/SafetyLayout';

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
    <SafetyLayout>
      <SectionTitle
        title="정식 업체 조회"
        description="상호명, 대표자명, 광고용 번호로 등록 여부를 확인하세요."
      />
      <div className="mt-8">
        <CorpCheckForm
          initialType={initialType}
          initialQuery={initialQuery}
        />
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        Mock 예시: 상호 &quot;든든금융대부&quot;, 번호 &quot;02-1234-5678&quot;
      </p>
    </SafetyLayout>
  );
}
