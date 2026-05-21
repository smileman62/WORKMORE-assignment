export type TermUnit = 'year' | 'month';

export const TERM_UNIT_LABELS: Record<TermUnit, string> = {
  year: '년',
  month: '개월',
};

const YEAR_TERM_MONTHS = [12, 24, 36, 48, 60] as const;
const MONTH_TERM_MIN = 12;
const MONTH_TERM_MAX = 60;

export type RepaymentTermOption = {
  value: string;
  label: string;
};

export function formatRepaymentTermLabel(
  months: number,
  unit: TermUnit,
): string {
  if (unit === 'year') {
    return `${months / 12}년 (${months}개월)`;
  }
  return `${months}개월`;
}

export function getRepaymentTermOptions(unit: TermUnit): RepaymentTermOption[] {
  if (unit === 'year') {
    return YEAR_TERM_MONTHS.map((months) => ({
      value: String(months),
      label: formatRepaymentTermLabel(months, 'year'),
    }));
  }

  return Array.from(
    { length: MONTH_TERM_MAX - MONTH_TERM_MIN + 1 },
    (_, index) => {
      const months = MONTH_TERM_MIN + index;
      return {
        value: String(months),
        label: formatRepaymentTermLabel(months, 'month'),
      };
    },
  );
}

export function clampTermMonthsToUnit(
  monthsValue: string,
  unit: TermUnit,
): string {
  const months = Number.parseInt(monthsValue, 10) || MONTH_TERM_MIN;

  if (unit === 'year') {
    if ((YEAR_TERM_MONTHS as readonly number[]).includes(months)) {
      return String(months);
    }
    const nearest = YEAR_TERM_MONTHS.reduce((closest, candidate) =>
      Math.abs(candidate - months) < Math.abs(closest - months)
        ? candidate
        : closest,
    );
    return String(nearest);
  }

  return String(
    Math.min(MONTH_TERM_MAX, Math.max(MONTH_TERM_MIN, months)),
  );
}

export function stepRepaymentTermMonths(
  monthsValue: string,
  delta: 1 | -1,
  unit: TermUnit,
): string {
  const months = Number.parseInt(monthsValue, 10) || MONTH_TERM_MIN;

  if (unit === 'year') {
    const index = YEAR_TERM_MONTHS.indexOf(
      months as (typeof YEAR_TERM_MONTHS)[number],
    );
    const safeIndex = index >= 0 ? index : 0;
    const nextIndex = Math.min(
      YEAR_TERM_MONTHS.length - 1,
      Math.max(0, safeIndex + delta),
    );
    return String(YEAR_TERM_MONTHS[nextIndex]);
  }

  const next = Math.min(
    MONTH_TERM_MAX,
    Math.max(MONTH_TERM_MIN, months + delta),
  );
  return String(next);
}
