import type { FraudNumberRecord, VerifiedCompany } from './types';

export const mockVerifiedCompanies: VerifiedCompany[] = [
  {
    id: 'verified-1',
    businessName: '든든금융대부',
    representativeName: '김민수',
    registrationNumber: '2020-서울강남-00123',
    address: '서울특별시 강남구 테헤란로 123',
    adPhone: '02-1234-5678',
    isRegistered: true,
  },
  {
    id: 'verified-2',
    businessName: '서울희망금융',
    representativeName: '이지현',
    registrationNumber: '2019-서울마포-00456',
    address: '서울특별시 마포구 월드컵북로 45',
    adPhone: '02-2345-6789',
    isRegistered: true,
  },
  {
    id: 'verified-3',
    businessName: '인천스마트대부',
    representativeName: '박서준',
    registrationNumber: '2021-인천남동-00789',
    address: '인천광역시 남동구 인주대로 200',
    adPhone: '032-567-8901',
    isRegistered: true,
  },
  {
    id: 'verified-4',
    businessName: '미등록테스트금융',
    representativeName: '홍길동',
    registrationNumber: '-',
    address: '-',
    adPhone: '010-9999-0000',
    isRegistered: false,
  },
];

export const mockFraudNumbers: FraudNumberRecord[] = [
  {
    phone: '01012345678',
    status: 'none',
  },
  {
    phone: '01098765432',
    status: 'suspicious',
    reportCount: 3,
    lastReportedAt: '2025-11-02',
  },
  {
    phone: '0212345678',
    status: 'suspicious',
    reportCount: 1,
    lastReportedAt: '2026-01-15',
  },
  {
    phone: '01000000000',
    status: 'unknown',
  },
];
