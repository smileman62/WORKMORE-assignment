import { TestComponentsPage } from '@/views/test-components/TestComponentsPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '컴포넌트 테스트 | 대출나라',
  description: '공용 UI 컴포넌트 테스트 페이지',
};

export default function Page() {
  return <TestComponentsPage />;
}
