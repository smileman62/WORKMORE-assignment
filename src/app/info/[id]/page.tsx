import { ArticleDetailPage } from '@/views/info-hub/ArticleDetailPage';

export const metadata = {
  title: '정보 상세 | 대출나라',
  description: '금융 정보·이용 안내 상세 내용',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ArticleDetailPage articleId={id} />;
}
