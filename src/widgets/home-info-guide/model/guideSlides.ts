import { ROUTES } from '@/shared/constants/routes';

export type GuideSlideCategory = 'safety' | 'service';

export type GuideSlideCta = {
  label: string;
  href: string;
};

export type GuideSlide = {
  id: string;
  category: GuideSlideCategory;
  /** 카테고리 내 번호 (안전 01~04, 서비스 01~02) */
  index: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  cta?: GuideSlideCta;
};

export const GUIDE_SLIDES: GuideSlide[] = [
  {
    id: 'service-01',
    category: 'service',
    index: 1,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '모바일로 대출 업체를 검색하는 모습',
    title: '전국 대출업체를\n한곳에서 찾아보세요',
    description:
      '지역·상품·조건에 맞는 등록 업체를 비교하고 상담할 수 있는 검색 플랫폼이에요.',
    cta: { label: '조건으로 업체 찾기', href: ROUTES.companies },
  },
  {
    id: 'safety-01',
    category: 'safety',
    index: 1,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '안전한 금융 상담',
    title: '금융감독원 등록 여부를\n먼저 확인하세요',
    description:
      '상담 전 정식 등록 업체인지 확인하면 불법 업체를 걸러내는 첫 단계가 됩니다.',
    cta: { label: '정식 업체 조회하기', href: ROUTES.safetyVerifyCompany },
  },
  {
    id: 'safety-02',
    category: 'safety',
    index: 2,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '연락처 확인',
    title: '연락처와 번호를\n꼭 다시 확인하세요',
    description:
      '의심스러운 번호는 사기 번호 검색으로 먼저 확인한 뒤 상담을 진행하세요.',
    cta: { label: '사기 번호 검색하기', href: ROUTES.safetyFraudNumber },
  },
  {
    id: 'safety-03',
    category: 'safety',
    index: 3,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '개인정보 보호',
    title: '과도한 개인정보 요구는\n주의하세요',
    description:
      '주민등록번호·계좌 비밀번호 등 불필요한 정보를 요구하면 신중히 확인하세요.',
    cta: { label: '안전 가이드 보기', href: ROUTES.safetyGuide },
  },
  {
    id: 'safety-04',
    category: 'safety',
    index: 4,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '금융 수수료·계약 주의',
    title: '선입금·과도한 수수료\n요구는 주의하세요',
    description:
      '상담 전 선입금을 요구하면 거래를 중단하고 확인하세요. 정식 업체는 선입금을 요구하지 않아요.',
    cta: { label: '피해 신고하기', href: ROUTES.safetyReport },
  },
  {
    id: 'service-02',
    category: 'service',
    index: 2,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=85&auto=format&fit=crop',
    imageAlt: '대출나라 서비스 안내',
    title: '대출나라는\n직접 대출하지 않습니다',
    description:
      '업체 정보를 제공하는 플랫폼이에요. 여러 업체를 비교하고 신중하게 선택하세요.',
    cta: { label: '안전센터 가기', href: ROUTES.safety },
  },
];

export function getGuideSlideLabel(slide: GuideSlide): string {
  const num = String(slide.index).padStart(2, '0');
  return slide.category === 'safety'
    ? `안전 확인 팁 ${num}`
    : `서비스 안내 ${num}`;
}
