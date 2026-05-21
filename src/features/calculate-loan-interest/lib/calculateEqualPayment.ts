export type EqualPaymentResult = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
};

/** 원리금균등 상환 기준 예상 상환액 (참고용 단순 계산) */
export function calculateEqualPayment(
  principal: number,
  annualRatePercent: number,
  months: number,
): EqualPaymentResult {
  if (principal <= 0 || months <= 0) {
    return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
  }

  if (annualRatePercent <= 0) {
    const monthlyPayment = principal / months;
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const compoundFactor = (1 + monthlyRate) ** months;
  const monthlyPayment =
    (principal * monthlyRate * compoundFactor) / (compoundFactor - 1);
  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
  };
}
