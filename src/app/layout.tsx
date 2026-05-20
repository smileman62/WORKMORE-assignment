import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '대출나라 리디자인',
  description:
    '내 조건에 맞는 등록 대출 업체를 찾고 상담 전 안전하게 확인하세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
