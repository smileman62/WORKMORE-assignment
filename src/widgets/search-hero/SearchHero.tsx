import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';

export function SearchHero() {
  return (
    <section className="bg-surface px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            나에게 맞는 등록업체 찾기
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            대출나라는 직접 대출하지 않습니다.
            <br className="hidden sm:inline" />
            상담 전 등록 여부와 번호를 먼저 확인하세요.
          </p>
        </div>
        <Button variant="primary" size="lg" asChild className="mx-auto w-full max-w-sm">
          <Link href={ROUTES.search}>내 조건으로 업체 찾기</Link>
        </Button>
      </div>
    </section>
  );
}
