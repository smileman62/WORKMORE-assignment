import { ROUTES } from '@/shared/constants/routes';

export type SafetyNavItem = {
  label: string;
  href: string;
};

export const SAFETY_NAV_ITEMS: SafetyNavItem[] = [
  { label: '정식 업체 조회', href: ROUTES.safetyVerifyCompany },
  { label: '사기 번호 검색', href: ROUTES.safetyFraudNumber },
  { label: '피해 신고', href: ROUTES.safetyReport },
  { label: '불법 금융 대응 가이드', href: ROUTES.safetyGuide },
];

export function isSafetyNavActive(pathname: string, href: string): boolean {
  if (href === ROUTES.safety) return pathname === ROUTES.safety;
  return pathname === href || pathname.startsWith(`${href}/`);
}
