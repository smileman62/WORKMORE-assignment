import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

export const metadata = {
  title: '고객센터 | 대출나라',
  description: '자주 묻는 질문과 1:1 문의를 확인하세요.',
};

export default function Page() {
  redirect(ROUTES.supportFaq);
}
