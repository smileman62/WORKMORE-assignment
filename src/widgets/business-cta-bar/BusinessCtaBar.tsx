import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';

export function BusinessCtaBar() {
  return (
    <section className="border-t border-border bg-background px-4 py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          광고 집행을 시작하려면 문의 또는 회원가입을 진행해 주세요.
        </p>
        <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <Button variant="primary" fullWidth asChild>
            <Link href={ROUTES.businessInquiry}>광고문의하기</Link>
          </Button>
          <Button variant="outline" fullWidth asChild>
            <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
          </Button>
          <Button variant="ghost" fullWidth asChild>
            <Link href={ROUTES.businessLogin}>업체 로그인</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
