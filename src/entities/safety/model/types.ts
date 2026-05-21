export type VerifiedCompanySearchType =
  | 'businessName'
  | 'representativeName'
  | 'adPhone';

export type VerifiedCompany = {
  id: string;
  businessName: string;
  representativeName: string;
  registrationNumber: string;
  address: string;
  adPhone: string;
  isRegistered: boolean;
};

export type FraudNumberStatus = 'none' | 'suspicious' | 'unknown';

export type FraudNumberRecord = {
  phone: string;
  status: FraudNumberStatus;
  reportCount?: number;
  lastReportedAt?: string;
};

export type CorpCheckSearchInput = {
  type: VerifiedCompanySearchType;
  query: string;
};

export type CorpCheckResult =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'found'; company: VerifiedCompany }
  | { status: 'not_found' }
  | { status: 'error' };

export type FraudNumberSearchResult =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'none' }
  | { status: 'suspicious'; record: FraudNumberRecord }
  | { status: 'unknown' }
  | { status: 'error' };
