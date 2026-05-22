'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { FraudNumberSearchForm } from '@/features/search-fraud-number/ui/FraudNumberSearchForm';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { SafetyLayout } from '@/widgets/safety-layout/SafetyLayout';

export function FraudNumberPage() {
  const searchParams = useSearchParams();
  const initialPhone = useMemo(
    () => searchParams.get('phone') ?? '',
    [searchParams],
  );

  return (
    <SafetyLayout>
      <SectionTitle
        title="사기 번호 검색"
        description="상담 연락처의 피해 신고 이력을 조회합니다."
      />
      <div className="mt-8">
        <FraudNumberSearchForm initialPhone={initialPhone} />
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        피해가 의심되면 즉시 상담을 중단하고 112·1332로 문의하세요.
      </p>
    </SafetyLayout>
  );
}
