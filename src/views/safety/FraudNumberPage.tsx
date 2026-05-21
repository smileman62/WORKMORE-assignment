'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { FraudNumberSearchForm } from '@/features/search-fraud-number/ui/FraudNumberSearchForm';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function FraudNumberPage() {
  const searchParams = useSearchParams();
  const initialPhone = useMemo(
    () => searchParams.get('phone') ?? '',
    [searchParams],
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle
          title="사기 번호 검색"
          description="상담 연락처의 피해 신고 이력을 조회합니다."
        />
        <div className="mt-8">
          <FraudNumberSearchForm initialPhone={initialPhone} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
          </Button>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Mock 예시: 이력 없음 010-1234-5678 · 의심 010-9876-5432 · 확인불가
          010-0000-0000
        </p>
      </div>
    </AppShell>
  );
}
