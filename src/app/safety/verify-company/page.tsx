import { Suspense } from 'react';

import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import { VerifyCompanyPage } from '@/views/safety/VerifyCompanyPage';

export const metadata = {
  title: '정식 업체 조회 | 대출나라',
  description:
    '상호명, 대표자명, 광고용 전화번호로 등록 대부업체 여부를 확인하세요.',
};

export default function Page() {
  return (
    <Suspense fallback={<LoadingState fullScreen />}>
      <VerifyCompanyPage />
    </Suspense>
  );
}
