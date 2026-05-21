import Link from 'next/link';
import { ShieldCheck, Search } from 'lucide-react';

import {
  buildFraudNumberHref,
  buildVerifyCompanyHref,
} from '@/entities/safety/lib/safetyLinks';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';

export type SafetyCtaRowProps = {
  variant?: 'default' | 'compact';
  /** sm: 14px, md: 16px 보조 문구 */
  textSize?: 'sm' | 'md';
  /** 업체 상세 등에서 조회값을 미리 채울 때 사용 */
  businessName?: string;
  contactPhone?: string;
};

export function SafetyCtaRow({
  variant = 'default',
  textSize = 'sm',
  businessName,
  contactPhone,
}: SafetyCtaRowProps) {
  const bodyTextClass = textSize === 'md' ? 'text-base' : 'text-sm';
  const verifyHref = buildVerifyCompanyHref({
    businessName,
    phone: contactPhone,
  });
  const fraudHref = buildFraudNumberHref(contactPhone);

  if (variant === 'compact') {
    return (
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button variant="outline" fullWidth asChild>
          <Link href={verifyHref}>
            <ShieldCheck className="h-4 w-4" aria-hidden />
            상담 전 등록 확인
          </Link>
        </Button>
        <Button variant="outline" fullWidth asChild>
          <Link href={fraudHref}>
            <Search className="h-4 w-4" aria-hidden />
            번호 조회하기
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card className="bg-primary-muted/50">
        <CardContent className="flex flex-col gap-4 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">정식 업체 조회</p>
              <p className={cn(bodyTextClass, 'text-muted-foreground')}>
                상담 전 등록 여부를 먼저 확인하세요.
              </p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href={verifyHref}>상담 전 등록 확인</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-4 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Search className="h-5 w-5 text-foreground" aria-hidden />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">사기 번호 검색</p>
              <p className={cn(bodyTextClass, 'text-muted-foreground')}>
                연락처가 신고 이력에 있는지 조회해 보세요.
              </p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href={fraudHref}>번호 조회하기</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
