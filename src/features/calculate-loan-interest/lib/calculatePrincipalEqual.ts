import type { EqualPaymentResult } from '@/features/calculate-loan-interest/lib/calculateEqualPayment';

/** 원금균등: 매월 동일 원금 + 잔액 이자 (첫 달 상환액을 대표값으로 반환) */
export function calculatePrincipalEqual(
  principal: number,
  annualRatePercent: number,
  months: number,
): EqualPaymentResult & { firstMonthPayment: number; lastMonthPayment: number } {
  if (principal <= 0 || months <= 0) {
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      firstMonthPayment: 0,
      lastMonthPayment: 0,
    };
  }

  if (annualRatePercent <= 0) {
    const monthlyPrincipal = principal / months;
    return {
      monthlyPayment: monthlyPrincipal,
      totalPayment: principal,
      totalInterest: 0,
      firstMonthPayment: monthlyPrincipal,
      lastMonthPayment: monthlyPrincipal,
    };
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const monthlyPrincipal = principal / months;
  let remaining = principal;
  let totalPayment = 0;
  let firstMonthPayment = 0;
  let lastMonthPayment = 0;

  for (let month = 0; month < months; month += 1) {
    const interest = remaining * monthlyRate;
    const payment = monthlyPrincipal + interest;
    if (month === 0) {
      firstMonthPayment = payment;
    }
    lastMonthPayment = payment;
    totalPayment += payment;
    remaining -= monthlyPrincipal;
  }

  return {
    monthlyPayment: firstMonthPayment,
    totalPayment,
    totalInterest: totalPayment - principal,
    firstMonthPayment,
    lastMonthPayment,
  };
}
