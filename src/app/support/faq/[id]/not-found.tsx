import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { SupportLayout } from '@/widgets/support-layout/SupportLayout';

export default function NotFound() {
  return (
    <SupportLayout>
      <h1 className="text-xl font-bold text-foreground">FAQ를 찾을 수 없어요</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        삭제되었거나 주소가 잘못되었을 수 있습니다.
      </p>
      <Button variant="primary" className="mt-6" asChild>
        <Link href={ROUTES.supportFaq}>FAQ 목록으로</Link>
      </Button>
    </SupportLayout>
  );
}
