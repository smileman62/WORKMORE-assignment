import type { RepaymentMethod } from '@/features/calculate-loan-interest/lib/calculateLoanResult';

export const REPAYMENT_METHOD_ORDER: RepaymentMethod[] = [
  'equal',
  'principal',
  'bullet',
];

export const REPAYMENT_METHOD_LABELS: Record<RepaymentMethod, string> = {
  equal: '원리금 균등 상환',
  principal: '원금 균등 상환',
  bullet: '만기 일시 상환',
};

const METHOD_KEYWORDS: { keyword: string; method: RepaymentMethod }[] = [
  { keyword: '원리금균등', method: 'equal' },
  { keyword: '원금균등', method: 'principal' },
  { keyword: '만기일시', method: 'bullet' },
];

/** 업체 상환방식 문구에서 계산기에서 선택 가능한 방식 목록 추출 */
export function parseAvailableRepaymentMethods(text?: string): RepaymentMethod[] {
  if (!text?.trim() || text.includes('상담')) {
    return [...REPAYMENT_METHOD_ORDER];
  }

  const normalized = text.replace(/\s/g, '');
  const found = new Set<RepaymentMethod>();

  for (const { keyword, method } of METHOD_KEYWORDS) {
    if (normalized.includes(keyword)) {
      found.add(method);
    }
  }

  if (found.size === 0) {
    return ['equal'];
  }

  return REPAYMENT_METHOD_ORDER.filter((method) => found.has(method));
}
