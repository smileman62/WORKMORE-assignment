import Link from 'next/link';

import { Button } from '@/shared/ui/button/Button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-foreground">대출나라 리디자인</h1>
        <p className="text-sm text-muted-foreground">
          내 조건에 맞는 등록 업체를 찾고 상담 전 안전하게 확인하세요.
        </p>
      </div>
      <Button asChild>
        <Link href="/test-components">컴포넌트 테스트 페이지</Link>
      </Button>
    </main>
  );
}
