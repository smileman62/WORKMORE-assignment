import { calculateEqualPayment } from '@/features/calculate-loan-interest/lib/calculateEqualPayment';
import { calculatePrincipalEqual } from '@/features/calculate-loan-interest/lib/calculatePrincipalEqual';

export type RepaymentMethod = 'equal' | 'principal' | 'bullet';

export type LoanResult = {
  repaymentMethod: RepaymentMethod;
  /** 매월 납부액 (만기일시는 월 이자) */
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  /** 만기일시 시 만기 원금 상환액 */
  maturityPrincipal?: number;
  /** 원금균등 마지막 달 상환액 */
  lastMonthPayment?: number;
};

/** 만기일시: 기간 중 월 이자만 납부, 만기에 원금 일시 상환 */
function calculateBulletPayment(
  principal: number,
  annualRatePercent: number,
  months: number,
): LoanResult {
  if (principal <= 0 || months <= 0) {
    return {
      repaymentMethod: 'bullet',
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      maturityPrincipal: 0,
    };
  }

  if (annualRatePercent <= 0) {
    return {
      repaymentMethod: 'bullet',
      monthlyPayment: 0,
      totalPayment: principal,
      totalInterest: 0,
      maturityPrincipal: principal,
    };
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const monthlyInterest = principal * monthlyRate;
  const totalInterest = monthlyInterest * months;
  const totalPayment = principal + totalInterest;

  return {
    repaymentMethod: 'bullet',
    monthlyPayment: monthlyInterest,
    totalPayment,
    totalInterest,
    maturityPrincipal: principal,
  };
}

export function calculateLoanResult(
  principal: number,
  annualRatePercent: number,
  months: number,
  repaymentMethod: RepaymentMethod,
): LoanResult {
  if (repaymentMethod === 'bullet') {
    return calculateBulletPayment(principal, annualRatePercent, months);
  }

  if (repaymentMethod === 'principal') {
    const principalEqual = calculatePrincipalEqual(
      principal,
      annualRatePercent,
      months,
    );
    return {
      repaymentMethod: 'principal',
      monthlyPayment: principalEqual.firstMonthPayment,
      totalPayment: principalEqual.totalPayment,
      totalInterest: principalEqual.totalInterest,
      lastMonthPayment: principalEqual.lastMonthPayment,
    };
  }

  const equal = calculateEqualPayment(principal, annualRatePercent, months);
  return {
    repaymentMethod: 'equal',
    monthlyPayment: equal.monthlyPayment,
    totalPayment: equal.totalPayment,
    totalInterest: equal.totalInterest,
  };
}
