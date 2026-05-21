export const REGION_OPTIONS = [
  '서울',
  '경기',
  '인천',
  '부산',
  '대구',
  '광주',
  '대전',
  '울산',
  '제주',
] as const;

export const SITUATION_OPTIONS = [
  '직장인',
  '무직자',
  '주부',
  '여성',
  '사업자',
  '프리랜서',
] as const;

export const PRODUCT_OPTIONS = [
  '소액대출',
  '비상금대출',
  '무방문대출',
  '월변대출',
  '개인돈대출',
] as const;

export type RegionOption = (typeof REGION_OPTIONS)[number];
export type SituationOption = (typeof SITUATION_OPTIONS)[number];
export type ProductOption = (typeof PRODUCT_OPTIONS)[number];
