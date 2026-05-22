import { ROUTES } from '@/shared/constants/routes';

export type SupportNavItem = {
  label: string;
  href: string;
};

export const SUPPORT_NAV_ITEMS: SupportNavItem[] = [
  { label: '자주 묻는 질문', href: ROUTES.supportFaq },
  { label: '1:1 문의', href: ROUTES.supportInquiry },
];

export function isSupportNavActive(pathname: string, href: string): boolean {
  if (href === ROUTES.supportFaq) {
    return (
      pathname === ROUTES.supportFaq ||
      pathname.startsWith(`${ROUTES.supportFaq}/`)
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
