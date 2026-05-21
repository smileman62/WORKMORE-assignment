export const REGION_ALL_LABEL = '전체' as const;

/** 드롭다운·필터용 지역 (전체 제외) */
export const REGION_FILTER_OPTIONS = [
  '서울',
  '경기',
  '인천',
  '대전',
  '대구',
  '부산',
  '광주',
  '울산',
  '세종',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
] as const;

/** 지역 그리드 3행 (전체는 UI에서 별도 렌더) */
export const REGION_GRID_ROWS: readonly (readonly RegionFilterOption[])[] = [
  ['서울', '경기', '인천', '대전', '대구'],
  ['부산', '광주', '울산', '세종', '강원', '충북'],
  ['충남', '전북', '전남', '경북', '경남', '제주'],
] as const;

/** @deprecated REGION_FILTER_OPTIONS 사용 */
export const REGION_OPTIONS = REGION_FILTER_OPTIONS;

export const SITUATION_OPTIONS = [
  '직장인',
  '무직자',
  '주부',
  '여성',
  '사업자',
  '프리랜서',
] as const;

export const PRODUCT_ALL_LABEL = '전체' as const;

/** 드롭다운·필터용 상품 (전체 제외) */
export const PRODUCT_FILTER_OPTIONS = [
  '직장인대출',
  '무직자대출',
  '여성대출',
  '비상금대출',
  '모바일대출',
  '소액대출',
  '무방문대출',
  '자영업자대출',
  '당일대출',
  '사업자대출',
  '전문직대출',
  '저신용자대출',
  '신용대출',
  '추가대출',
  '자동차대출',
  '부동산대출',
  '생활비대출',
  '대환대출',
  '온라인대출',
  '일용직대출',
  '프리랜서대출',
  '전당포대출',
  '비대면대출',
  '주부대출',
  '회생파산대출',
  '기타대출',
] as const;

/** 상품 그리드 3×9 (이미지 레이아웃) */
export const PRODUCT_GRID_ROWS: readonly (readonly ProductFilterOption[])[] = [
  [
    '직장인대출',
    '무직자대출',
    '여성대출',
    '비상금대출',
    '모바일대출',
    '소액대출',
    '무방문대출',
    '자영업자대출',
  ],
  [
    '사업자대출',
    '전문직대출',
    '저신용자대출',
    '신용대출',
    '추가대출',
    '자동차대출',
    '부동산대출',
    '생활비대출',
    '온라인대출',
  ],
  [
    '일용직대출',
    '프리랜서대출',
    '전당포대출',
    '비대면대출',
    '주부대출',
    '회생파산대출',
    '대환대출',
    '기타대출',
  ],
] as const;

/** @deprecated PRODUCT_FILTER_OPTIONS 사용 */
export const PRODUCT_OPTIONS = PRODUCT_FILTER_OPTIONS;

export const REPAYMENT_OPTIONS = [
  '원리금균등',
  '만기일시',
  '자유상환',
] as const;

export type RegionFilterOption = (typeof REGION_FILTER_OPTIONS)[number];
export type ProductFilterOption = (typeof PRODUCT_FILTER_OPTIONS)[number];
export type RegionOption = RegionFilterOption;
export type SituationOption = (typeof SITUATION_OPTIONS)[number];
export type ProductOption = ProductFilterOption;
export type RepaymentOption = (typeof REPAYMENT_OPTIONS)[number];
