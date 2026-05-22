import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card/Card';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { EnterpriseShell } from '@/widgets/enterprise-shell/EnterpriseShell';

export function EnterpriseLoginPage() {
  return (
    <EnterpriseShell>
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-md">
          <SectionTitle
            title="기업 로그인"
            description="등록된 업체 계정으로 광고·노출 관리에 접속합니다."
          />
          <Card className="mt-8 rounded-2xl border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">로그인</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-5 pt-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="ent-id">아이디</Label>
                <Input
                  id="ent-id"
                  placeholder="사업자 아이디"
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="ent-pw">비밀번호</Label>
                <Input
                  id="ent-pw"
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
                  href={ROUTES.enterpriseJoin}
                  className="font-medium text-primary hover:underline"
                >
                  기업 등록하기
                </Link>
              </p>
            </CardContent>
          </Card>
          <div className="mt-6 flex flex-col items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href={ROUTES.enterprise}>업체용 홈으로</Link>
            </Button>
          </div>
        </div>
      </section>
    </EnterpriseShell>
  );
}
