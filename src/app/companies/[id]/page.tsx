import { CompanyDetailPage } from '@/views/company-detail/CompanyDetailPage';

export const metadata = {
  title: '업체 상세 | 대출나라',
  description: '업체 정보를 확인하고 상담 전 안전하게 등록 여부를 확인하세요.',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CompanyDetailPage companyId={id} />;
}
