import { Suspense } from 'react';

import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import { FraudNumberPage } from '@/views/safety/FraudNumberPage';

export const metadata = {
  title: '사기 번호 검색 | 대출나라',
  description: '상담 연락처의 사기 의심 피해 신고 이력을 조회하세요.',
};

export default function Page() {
  return (
    <Suspense fallback={<LoadingState fullScreen />}>
      <FraudNumberPage />
    </Suspense>
  );
}
