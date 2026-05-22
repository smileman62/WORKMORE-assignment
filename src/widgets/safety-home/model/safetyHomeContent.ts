import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, BookOpen, Phone, ShieldCheck } from 'lucide-react';

import { ROUTES } from '@/shared/constants/routes';

export type SafetyHarmGuide = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
};

export type SafetyActionCard = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  iconWrapClassName: string;
  iconClassName: string;
};

export type OfficialAgency = {
  name: string;
  contact: string;
  description: string;
};

/** 상단 넓은 카드 1개 */
export const SAFETY_FEATURED_ACTION: SafetyActionCard = {
  id: 'verify-first',
  label: '상담 전, 등록 업체인지 먼저 확인하고 싶어요',
  href: ROUTES.safetyVerifyCompany,
  icon: ShieldCheck,
  iconWrapClassName: 'bg-muted',
  iconClassName: 'text-muted-foreground',
};

/** 하단 3열 카드 (정식 업체 조회는 상단 featured 카드로 통합) */
export const SAFETY_DAMAGE_ACTIONS: SafetyActionCard[] = [
  {
    id: 'fraud-number',
    label: '사기 번호 검색',
    href: ROUTES.safetyFraudNumber,
    icon: Phone,
    iconWrapClassName: 'bg-success-muted',
    iconClassName: 'text-success',
  },
  {
    id: 'report-scam',
    label: '보이스피싱·대출 사기 신고',
    href: ROUTES.safetyReport,
    icon: AlertTriangle,
    iconWrapClassName: 'bg-danger-muted',
    iconClassName: 'text-danger',
  },
  {
    id: 'illegal-finance',
    label: '불법 금융 대응 가이드',
    href: ROUTES.safetyGuide,
    icon: BookOpen,
    iconWrapClassName: 'bg-warning-muted',
    iconClassName: 'text-warning',
  },
];

/** @deprecated SAFETY_DAMAGE_ACTIONS 사용 */
export const SAFETY_QUICK_LINKS = SAFETY_DAMAGE_ACTIONS.map((item) => ({
  label: item.label,
  href: item.href,
}));

export const OFFICIAL_AGENCIES: OfficialAgency[] = [
  {
    name: '금융감독원',
    contact: '1332',
    description: '등록 대부업체 조회·금융민원·불법 사금융 신고',
  },
  {
    name: '경찰청',
    contact: '112',
    description: '사기·보이스피싱·긴급 신고',
  },
  {
    name: '대출나라 고객센터',
    contact: '1588-0000',
    description: '서비스 이용·피해 접수 안내 (운영 시간 내)',
  },
];
