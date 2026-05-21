import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card/Card';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export function BusinessLoginPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md px-4 py-10 md:py-14">
        <SectionTitle
          title="업체 로그인"
          description="사업자 대시보드에 접속합니다. (인증 API 연동 전 UI)"
        />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-base">로그인</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-0">
            <div className="flex flex-col gap-2">
              <Label htmlFor="biz-id">아이디</Label>
              <Input id="biz-id" placeholder="사업자 아이디" autoComplete="username" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="biz-pw">비밀번호</Label>
              <Input
                id="biz-pw"
                type="password"
                placeholder="비밀번호"
                autoComplete="current-password"
              />
            </div>
            <Button variant="primary" fullWidth disabled>
              로그인 (준비 중)
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              계정이 없으신가요?{' '}
              <Link
                href={ROUTES.businessJoin}
                className="font-medium text-primary hover:underline"
              >
                업체 회원가입
              </Link>
            </p>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.business}>사업자 안내로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
