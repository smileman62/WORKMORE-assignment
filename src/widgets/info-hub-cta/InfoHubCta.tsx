import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function InfoHubCta() {
  return (
    <section className="bg-surface px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="금융 정보 허브"
          description="대출 전 알아두면 좋은 정보와 FAQ를 확인하세요."
        />
        <Card className="mt-6">
          <CardContent className="flex items-start gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <BookOpen className="h-5 w-5 text-foreground" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                금리, 상환, 불법 금융 예방 등 핵심만 정리한 콘텐츠를
                제공합니다.
              </p>
              <Button variant="outline" size="sm" asChild className="w-fit">
                <Link href={ROUTES.info}>정보 허브 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
