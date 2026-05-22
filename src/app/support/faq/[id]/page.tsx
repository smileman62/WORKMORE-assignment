import { SupportFaqDetailPage } from '@/views/support/SupportFaqDetailPage';

export const metadata = {
  title: 'FAQ 상세 | 고객센터 | 대출나라',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <SupportFaqDetailPage faqId={id} />;
}
