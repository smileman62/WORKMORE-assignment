export type InterestRateRange = {
  min: number;
  max: number;
};

const DEFAULT_RANGE: InterestRateRange = { min: 12, max: 20 };

/** "연 10% ~ 18%", "연12%~20%" 등 문자열에서 연 이율(%) 범위 추출 */
export function parseInterestRateRange(rateText?: string): InterestRateRange {
  if (!rateText) {
    return DEFAULT_RANGE;
  }

  const matches = rateText.match(/(\d+(?:\.\d+)?)/g);
  if (!matches || matches.length === 0) {
    return DEFAULT_RANGE;
  }

  const values = matches.map((value) => Number.parseFloat(value));
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max };
}

export function getMidInterestRate(range: InterestRateRange): number {
  return Math.round(((range.min + range.max) / 2) * 10) / 10;
}
