import type { Company, CompanyProductDetail } from '@/entities/loan-company/model/types';

export function buildCompanyProductDetail(company: Company): CompanyProductDetail {
  const annual = company.interestRate ?? '상담 후 안내';

  return {
    annualInterestRate: annual,
    monthlyInterestRate: deriveMonthlyRate(annual),
    loanLimit: company.loanLimit ?? '상담',
    overdueInterestRate: '없음',
    additionalCost: company.additionalCost ?? '무',
    earlyRepaymentFee: '무',
    repaymentMethod: company.repaymentMethod ?? '상담 후 결정',
    loanPeriod: '12개월 ~ 60개월',
    serviceRegion: company.regionLabel === '전국' ? '전국' : company.regionLabel,
  };
}

function deriveMonthlyRate(annualRate: string): string | undefined {
  const range = annualRate.match(/(\d+(?:\.\d+)?)/g);
  if (!range || range.length === 0) {
    return undefined;
  }

  const values = range.map((value) => Number.parseFloat(value) / 12);
  const min = Math.round(values[0] * 10) / 10;
  const max = Math.round(values[values.length - 1] * 10) / 10;

  if (min === max) {
    return `월 ${min}%`;
  }
  return `월 ${min}% ~ ${max}%`;
}
