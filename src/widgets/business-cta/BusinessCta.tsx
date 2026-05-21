import Link from 'next/link';
import { Building2 } from 'lucide-react';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessCta() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="사업자 전용"
          description="등록 업체 광고·노출 문의는 사업자 페이지에서 확인하세요."
        />
        <Card className="mt-6 border-dashed">
          <CardContent className="flex items-start gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Building2 className="h-5 w-5 text-foreground" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                일반 이용자 탐색과 분리된 사업자 안내 페이지입니다.
              </p>
              <Button variant="secondary" size="sm" asChild className="w-fit">
                <Link href={ROUTES.business}>사업자 페이지로 이동</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
