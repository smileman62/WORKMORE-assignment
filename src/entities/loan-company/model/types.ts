export type ConsultationType = 'phone' | 'sms' | 'both';

export type Company = {
  id: string;
  name: string;
  /** 카드·목록용 한 줄 소개 */
  tagline: string;
  /** 카드·목록용 간단 설명 */
  summary: string;
  /** 카드·목록용 지역 라벨 (전국, 서울, 부산 등) */
  regionLabel: string;
  /** 카드 좌상단 다중 지역 표시 (미지정 시 regionLabel 사용) */
  regionLabels?: string[];
  region: string;
  products: string[];
  loanLimit?: string;
  interestRate?: string;
  repaymentMethod?: string;
  contactNumber: string;
  isVerifiedAvailable: boolean;
  isRecommended: boolean;
  isAd: boolean;
  /** 카드 업체특징 칩 */
  features?: string[];
  consultationType: ConsultationType;
  /** 상세 페이지용 */
  description?: string;
  additionalCost?: string;
  consultationTime?: string;
  situations?: string[];
};

/** @deprecated Company 사용 권장 */
export type LoanCompany = Company;
