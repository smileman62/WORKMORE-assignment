import { CompanyResultsPage } from '@/views/company-results/CompanyResultsPage';

export const metadata = {
  title: '업체 검색 결과 | 대출나라',
  description: '선택한 조건에 맞는 등록 대출 업체 목록을 확인하세요.',
};

export default function Page() {
  return <CompanyResultsPage />;
}
