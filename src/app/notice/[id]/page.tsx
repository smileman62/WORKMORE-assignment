import { NoticeDetailPage } from '@/views/notice/NoticeDetailPage';

export const metadata = {
  title: '공지사항 | 대출나라',
  description: '대출나라 서비스 공지사항 상세',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <NoticeDetailPage noticeId={id} />;
}
