import type { LoanCompany } from './types';

export const loanCompanyMock: LoanCompany[] = [
  {
    id: 'company-1',
    name: '든든금융대부',
    region: '서울 강남구',
    products: ['소액대출', '비대면'],
    isAdvertised: false,
    isVerified: true,
    consultationTime: '09:00 ~ 22:00',
  },
  {
    id: 'company-2',
    name: '서울희망금융',
    region: '서울 마포구',
    products: ['직장인대출', '담보대출'],
    isAdvertised: true,
    isVerified: true,
    consultationTime: '10:00 ~ 20:00',
  },
  {
    id: 'company-3',
    name: '부산안심대부',
    region: '부산 해운대구',
    products: ['소액대출'],
    isAdvertised: false,
    isVerified: false,
    consultationTime: '09:00 ~ 18:00',
  },
];
