import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: '업체 찾기 | 대출나라',
  description: '지역, 직업, 상품 조건으로 등록 대출 업체를 찾아보세요.',
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const qs = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'string') qs.set(key, value);
    else if (Array.isArray(value)) value.forEach((v) => qs.append(key, v));
  });

  const query = qs.toString();
  redirect(query ? `${ROUTES.companies}?${query}` : ROUTES.companies);
}
