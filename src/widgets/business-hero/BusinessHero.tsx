import Link from 'next/link';
import { Building2, ArrowLeft } from 'lucide-react';

import { ROUTES } from '@/shared/constants/routes';
import { Badge } from '@/shared/ui/badge/Badge';
import { Button } from '@/shared/ui/button/Button';

export function BusinessHero() {
  return (
    <section className="border-b border-border bg-[#1e1c19] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <Link
          href={ROUTES.home}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          일반 고객 홈으로
        </Link>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Badge
              variant="outline"
              className="w-fit border-white/30 bg-white/10 text-white"
            >
              사업자 전용
            </Badge>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Building2 className="h-6 w-6 text-white" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                  등록 업체 광고·노출 안내
                </h1>
                <p className="text-sm text-white/80 md:text-base">
                  대출 상담을 찾는 이용자에게 업체를 소개합니다. 대출 실행·중개가
                  아닌, 정보 노출·상담 연결 플랫폼입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button
              variant="primary"
              size="lg"
              asChild
              className="bg-primary hover:bg-primary-hover"
            >
              <Link href={ROUTES.businessInquiry}>광고문의하기</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-white hover:bg-white/10"
            >
              <Link href={ROUTES.businessLogin}>업체 로그인</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
