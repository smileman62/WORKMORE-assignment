export type ConsultationType = 'phone' | 'sms' | 'both';

export type Company = {
  id: string;
  name: string;
  region: string;
  products: string[];
  loanLimit?: string;
  interestRate?: string;
  repaymentMethod?: string;
  contactNumber: string;
  isVerifiedAvailable: boolean;
  isRecommended: boolean;
  isAd: boolean;
  consultationType: ConsultationType;
  /** 상세 페이지용 */
  description?: string;
  additionalCost?: string;
  consultationTime?: string;
  situations?: string[];
};

/** @deprecated Company 사용 권장 */
export type LoanCompany = Company;
