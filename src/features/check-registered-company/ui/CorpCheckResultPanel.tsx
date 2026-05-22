import Link from 'next/link';
import { Building2, CheckCircle2, MapPin, Phone, User, XCircle } from 'lucide-react';
import type { ComponentType } from 'react';

import type { CorpCheckResult } from '@/entities/safety/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { Badge } from '@/shared/ui/badge/Badge';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card/Card';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { ErrorState } from '@/shared/ui/error-state/ErrorState';

export type CorpCheckResultPanelProps = {
  result: Exclude<CorpCheckResult, { status: 'idle' } | { status: 'loading' }>;
  onReset?: () => void;
};

export function CorpCheckResultPanel({ result, onReset }: CorpCheckResultPanelProps) {
  if (result.status === 'error') {
    return <ErrorState onRetry={onReset} />;
  }

  if (result.status === 'not_found') {
    return (
      <EmptyState
        icon={XCircle}
        title="조회 결과가 없어요"
        description="입력한 정보가 정확한지 확인하거나, 다른 검색 유형으로 다시 조회해 보세요."
      >
        <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          {onReset ? (
            <Button
              type="button"
              variant="outline"
              className="min-w-0 flex-1"
              onClick={onReset}
            >
              다시 조회
            </Button>
          ) : null}
          <Button
            variant="outline"
            className="min-w-0 flex-1"
            asChild
          >
            <Link href={ROUTES.search}>다른 업체 찾기</Link>
          </Button>
        </div>
      </EmptyState>
    );
  }

  const { company } = result;

  return (
    <Card className="border-success/30 bg-success-muted/30">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">등록 확인 결과</CardTitle>
          <Badge variant={company.isRegistered ? 'success' : 'danger'}>
            {company.isRegistered ? '정식 등록' : '미등록'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-5 pt-0">
        <ResultRow
          icon={Building2}
          label="업체명"
          value={company.businessName}
        />
        <ResultRow
          icon={User}
          label="대표자명"
          value={company.representativeName}
        />
        <ResultRow
          icon={CheckCircle2}
          label="등록증번호"
          value={company.registrationNumber}
        />
        <ResultRow icon={MapPin} label="소재지" value={company.address} />
        <ResultRow icon={Phone} label="광고용 전화번호" value={company.adPhone} />

        <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row">
          <Button variant="primary" className="min-w-0 flex-1" asChild>
            <Link href={ROUTES.companies}>상담 계속하기</Link>
          </Button>
          <Button variant="outline" className="min-w-0 flex-1" asChild>
            <Link href={ROUTES.search}>다른 업체 찾기</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ResultRow({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-foreground">{value}</span>
      </div>
    </div>
  );
}
