import { buildSupplementaryDescription } from '@/entities/loan-company/lib/buildSupplementaryDescription';

import type { Company } from '@/entities/loan-company/model/types';

const REGIONS = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '전국',
] as const;

const PREFIXES = [
  '든든',
  '믿음',
  '희망',
  '안심',
  '바로',
  '스마트',
  '한결',
  '중앙',
  '프라임',
  '골든',
  '우리',
  '행복',
] as const;

const SUFFIXES = ['금융', '대부', '캐피탈', '파이낸스', '크레딧'] as const;

const PRODUCT_SETS: string[][] = [
  ['소액대출', '비상금대출', '당일대출'],
  ['직장인대출', '신용대출', '소액대출'],
  ['무방문대출', '비대면대출', '온라인대출'],
  ['사업자대출', '자영업자대출', '소액대출'],
  ['주부대출', '여성대출', '생활비대출'],
  ['프리랜서대출', '소액대출', '비상금대출'],
];

const SITUATION_SETS: string[][] = [
  ['직장인', '사업자'],
  ['직장인', '프리랜서'],
  ['직장인', '주부'],
  ['무직자', '주부'],
  ['직장인', '여성'],
  ['사업자', '프리랜서'],
];

export function generateExtraMockCompanies(
  startIndex: number,
  count: number,
): Company[] {
  return Array.from({ length: count }, (_, offset) => {
    const index = startIndex + offset;
    const region = REGIONS[index % REGIONS.length];
    const name = `${PREFIXES[index % PREFIXES.length]}${SUFFIXES[index % SUFFIXES.length]}`;
    const products = PRODUCT_SETS[index % PRODUCT_SETS.length];
    const situations = SITUATION_SETS[index % SITUATION_SETS.length];
    const isRecommended = index % 5 === 0;
    const isAd = index % 7 === 0;
    const isVerifiedAvailable = index % 3 !== 0;

    return {
      id: `company-${index}`,
      name,
      tagline: `${region} 지역 맞춤 ${products[0]} 상담`,
      summary: `${situations.join('·')} 대상, 당일 한도 조회 가능.`,
      regionLabel: region,
      region: `${region} ${index % 2 === 0 ? '중구' : '시청 인근'}`,
      products,
      loanLimit: `최대 ${(1 + (index % 5)) * 500}만원`,
      interestRate: `연 ${12 + (index % 5)}% ~ ${20 + (index % 4)}%`,
      repaymentMethod: index % 2 === 0 ? '원리금균등' : '원리금균등 · 만기일시',
      contactNumber: `0${index % 9}-${100 + index}-${2000 + index}`,
      isVerifiedAvailable,
      isRecommended,
      isAd,
      consultationType: index % 3 === 0 ? 'sms' : index % 2 === 0 ? 'phone' : 'both',
      consultationTime:
        index % 4 === 0 ? '00:00 ~ 24:00' : `09:00 ~ ${18 + (index % 4)}:00`,
      description: `${region} 지역 ${products.join(', ')} 상담.`,
      supplementaryDescription: buildSupplementaryDescription(name),
      situations,
    } satisfies Company;
  });
}
