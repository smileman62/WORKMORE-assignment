import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const qs = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'string') qs.set(key, value);
    else if (Array.isArray(value)) value.forEach((v) => qs.append(key, v));
  });

  const query = qs.toString();
  redirect(query ? `${ROUTES.safetyFraudNumber}?${query}` : ROUTES.safetyFraudNumber);
}
