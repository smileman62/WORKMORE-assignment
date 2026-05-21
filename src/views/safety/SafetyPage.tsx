import Link from 'next/link';
import {
  AlertTriangle,
  BookOpen,
  FileWarning,
  Search,
  Shield,
  ShieldCheck,
} from 'lucide-react';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';
import { SafetyChecklist } from '@/widgets/safety-checklist/SafetyChecklist';
import { SafetyHubCard } from '@/widgets/safety-hub-card/SafetyHubCard';

const OFFICIAL_AGENCIES = [
  { name: '금융감독원', desc: '등록 대부업체 조회·금융민원' },
  { name: '경찰청', desc: '사기·보이스피싱 신고 (112)' },
  { name: '금융감독원 불법사금융 신고', desc: '불법 사금융 피해·제보' },
] as const;

export function SafetyPage() {
  return (
    <AppShell>
      <div className="bg-surface px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
            <Shield className="h-6 w-6 text-primary" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold text-foreground">안전센터</h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            상담 전 30초만 확인해도 위험을 줄일 수 있어요.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            대출나라는 직접 대출하지 않습니다. 상담 전 업체 정보를 직접
            확인하세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <SectionTitle title="상담 전 체크리스트" />
        <div className="mt-4">
          <SafetyChecklist />
        </div>

        <SectionTitle title="안전 확인 도구" className="mt-10" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <SafetyHubCard
            title="정식 업체 조회"
            description="상호명, 대표자명, 광고용 번호로 등록 여부를 확인하세요."
            href={ROUTES.safetyVerifyCompany}
            actionLabel="등록 업체 조회"
            icon={ShieldCheck}
            variant="emphasis"
          />
          <SafetyHubCard
            title="사기 번호 검색"
            description="상담 연락처의 피해 신고 이력을 조회하세요."
            href={ROUTES.safetyFraudNumber}
            actionLabel="번호 조회하기"
            icon={Search}
          />
          <SafetyHubCard
            title="피해 신고"
            description="사기·불법 금융 피해를 접수하고 대응 방법을 안내받으세요."
            href={ROUTES.safetyReport}
            actionLabel="피해 신고하기"
            icon={FileWarning}
          />
          <SafetyHubCard
            title="불법금융 대응 가이드"
            description="의심 연락·협박·불법 추심 대응 절차를 확인하세요."
            href={ROUTES.safetyGuide}
            actionLabel="가이드 보기"
            icon={BookOpen}
          />
        </div>

        <SectionTitle title="공식 기관 안내" className="mt-10" />
        <ul className="mt-4 flex flex-col gap-3">
          {OFFICIAL_AGENCIES.map((agency) => (
            <li
              key={agency.name}
              className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3"
            >
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 text-warning"
                aria-hidden
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {agency.name}
                </p>
                <p className="text-xs text-muted-foreground">{agency.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-8">
          <Button variant="primary" size="lg" asChild className="w-full max-w-sm">
            <Link href={ROUTES.search}>업체 찾기로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
