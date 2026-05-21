import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import { AppShell } from '@/widgets/app-shell/AppShell';

export type SafetyPlaceholderPageProps = {
  title: string;
  description: string;
};

export function SafetyPlaceholderPage({
  title,
  description,
}: SafetyPlaceholderPageProps) {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <SectionTitle title={title} description={description} />
        <EmptyState
          className="mt-8"
          title="준비 중인 페이지예요"
          description="3차 신고·대응 플로우에서 상세 화면을 제공할 예정입니다."
        >
          <Button variant="primary" asChild>
            <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
          </Button>
        </EmptyState>
      </div>
    </AppShell>
  );
}
