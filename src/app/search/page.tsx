import { Suspense } from 'react';

import { CompanySearchPage } from '@/views/company-search/CompanySearchPage';
import { LoadingState } from '@/shared/ui/loading-state/LoadingState';

export const metadata = {
  title: '업체 찾기 | 대출나라',
  description: '지역, 상황, 상품 조건으로 등록 대출 업체를 찾아보세요.',
};

export default function Page() {
  return (
    <Suspense fallback={<LoadingState fullScreen />}>
      <CompanySearchPage />
    </Suspense>
  );
}
