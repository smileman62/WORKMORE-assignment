import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';

import type { FraudNumberSearchResult } from '@/entities/safety/model/types';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { ErrorState } from '@/shared/ui/error-state/ErrorState';

export type FraudNumberResultPanelProps = {
  result: Exclude<
    FraudNumberSearchResult,
    { status: 'idle' } | { status: 'loading' }
  >;
  onReset?: () => void;
};

export function FraudNumberResultPanel({
  result,
  onReset,
}: FraudNumberResultPanelProps) {
  if (result.status === 'error') {
    return (
      <ErrorState
        title="조회할 수 없어요"
        description="전화번호 형식을 확인한 뒤 다시 시도해 주세요."
        onRetry={onReset}
      />
    );
  }

  const config = getResultConfig(result);

  return (
    <Card className={config.cardClass}>
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${config.iconWrapClass}`}
          >
            <config.icon className={`h-5 w-5 ${config.iconClass}`} aria-hidden />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-foreground">{config.title}</p>
            <p className="text-sm text-muted-foreground">{config.description}</p>
            {result.status === 'suspicious' && result.record.reportCount && (
              <p className="text-xs text-muted-foreground">
                신고 접수 {result.record.reportCount}건
                {result.record.lastReportedAt &&
                  ` · 최근 ${result.record.lastReportedAt}`}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-4">
          {result.status === 'suspicious' && (
            <Button variant="danger" fullWidth asChild>
              <Link href={ROUTES.safetyReport}>피해 신고하기</Link>
            </Button>
          )}
          <Button variant="outline" fullWidth asChild>
            <Link href={ROUTES.safetyGuide}>불법금융 대응 가이드</Link>
          </Button>
          <Button variant="outline" fullWidth asChild>
            <Link href={ROUTES.safetyVerifyCompany}>정식 업체 조회</Link>
          </Button>
          {onReset && (
            <Button variant="ghost" fullWidth onClick={onReset}>
              다른 번호 조회
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getResultConfig(result: FraudNumberResultPanelProps['result']) {
  switch (result.status) {
    case 'none':
      return {
        icon: CheckCircle2,
        title: '조회된 피해 이력이 없습니다',
        description:
          '단, 상담 전 정식 등록 여부도 함께 확인하세요. 이력 없음이 안전을 보장하지는 않습니다.',
        cardClass: 'border-success/30 bg-success-muted/20',
        iconWrapClass: 'bg-success-muted',
        iconClass: 'text-success',
      };
    case 'suspicious':
      return {
        icon: ShieldAlert,
        title: '사기 의심 이력이 있어요',
        description:
          '해당 번호로 상담을 진행하기 전에 신중히 판단하세요. 필요하면 피해 신고를 검토해 주세요.',
        cardClass: 'border-danger/30 bg-danger-muted/30',
        iconWrapClass: 'bg-danger-muted',
        iconClass: 'text-danger',
      };
    case 'unknown':
      return {
        icon: HelpCircle,
        title: '확인이 어려운 번호예요',
        description:
          '시스템에서 이력을 확인하지 못했습니다. 정식 업체 조회와 함께 상담 여부를 판단해 주세요.',
        cardClass: 'border-warning/30 bg-warning-muted/30',
        iconWrapClass: 'bg-warning-muted',
        iconClass: 'text-warning',
      };
    default:
      return {
        icon: AlertTriangle,
        title: '조회 결과',
        description: '',
        cardClass: '',
        iconWrapClass: 'bg-muted',
        iconClass: 'text-foreground',
      };
  }
}
