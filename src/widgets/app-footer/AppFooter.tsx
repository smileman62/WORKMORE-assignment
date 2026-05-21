import Link from 'next/link';

import { ROUTES } from '@/shared/constants/routes';

const FOOTER_LINKS = [
  { label: '업체 찾기', href: ROUTES.search },
  { label: '안전센터', href: ROUTES.safety },
  { label: '금융 정보', href: ROUTES.info },
  { label: 'FAQ·문의', href: ROUTES.support },
  { label: '사업자', href: ROUTES.business },
] as const;

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-foreground">대출나라</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              대출나라는 직접 대출하지 않습니다. 등록 업체 정보 확인 후 상담을
              진행하세요.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="푸터 메뉴"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} 대출나라 리디자인 과제
        </p>
      </div>
    </footer>
  );
}
