'use client';

import { Minus, Plus } from 'lucide-react';
import {
  type InputHTMLAttributes,
  type ReactNode,
  useMemo,
  useState,
} from 'react';

import {
  calculateLoanResult,
  type RepaymentMethod,
} from '@/features/calculate-loan-interest/lib/calculateLoanResult';
import { formatWon } from '@/features/calculate-loan-interest/lib/formatWon';
import {
  getMidInterestRate,
  parseInterestRateRange,
} from '@/features/calculate-loan-interest/lib/parseInterestRateRange';
import {
  parseAvailableRepaymentMethods,
  REPAYMENT_METHOD_LABELS,
  REPAYMENT_METHOD_ORDER,
} from '@/features/calculate-loan-interest/lib/parseRepaymentMethods';
import {
  clampTermMonthsToUnit,
  formatRepaymentTermLabel,
  getRepaymentTermOptions,
  stepRepaymentTermMonths,
  TERM_UNIT_LABELS,
  type TermUnit,
} from '@/features/calculate-loan-interest/lib/repaymentTerm';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select';

/** 상환 기간 단위(년/개월) — 개월 등이 … 으로 잘리지 않도록 여유 너비 */
const TERM_UNIT_SELECT_WIDTH_CLASS = 'w-28';

export type LoanResultCalculatorProps = {
  /** 업체 안내 금리 문자열 (예: 연 10% ~ 18%) */
  interestRateText?: string;
  /** 업체 상환방식 문구 (예: 원리금균등 · 만기일시) */
  repaymentMethodText?: string;
  className?: string;
};

type RadioIndicatorProps = {
  selected: boolean;
  enabled: boolean;
};

function RadioIndicator({ selected, enabled }: RadioIndicatorProps) {
  return (
    <span
      className={cn(
        'relative flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors',
        enabled && selected && 'border-primary bg-primary',
        enabled && !selected && 'border-primary/70 bg-primary-muted',
        !enabled && 'border-muted-foreground/35 bg-muted/30',
      )}
      aria-hidden
    >
      {enabled && selected && (
        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
      )}
    </span>
  );
}

type RepaymentMethodRadioGroupProps = {
  value: RepaymentMethod;
  availableMethods: RepaymentMethod[];
  onChange: (method: RepaymentMethod) => void;
};

function RepaymentMethodRadioGroup({
  value,
  availableMethods,
  onChange,
}: RepaymentMethodRadioGroupProps) {
  return (
    <div
      role="radiogroup"
      aria-label="상환 방식"
      className="flex flex-col px-2 gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2"
    >
      {REPAYMENT_METHOD_ORDER.map((method) => {
        const enabled = availableMethods.includes(method);
        const selected = value === method;
        const inputId = `repayment-method-${method}`;

        return (
          <label
            key={method}
            htmlFor={inputId}
            className={cn(
              'inline-flex min-h-6 cursor-pointer items-center gap-2.5',
              !enabled && 'cursor-not-allowed',
            )}
          >
            <input
              id={inputId}
              type="radio"
              name="repayment-method"
              value={method}
              checked={selected}
              disabled={!enabled}
              onChange={() => onChange(method)}
              className="sr-only"
            />
            <RadioIndicator selected={selected} enabled={enabled} />
            <span
              className={cn(
                'text-sm leading-snug sm:text-base',
                enabled && selected && 'font-medium text-primary',
                enabled && !selected && 'text-foreground',
                !enabled && 'text-muted-foreground/70',
              )}
            >
              {REPAYMENT_METHOD_LABELS[method]}
            </span>
          </label>
        );
      })}
    </div>
  );
}

/** 입력·셀렉트 높이(h-11)와 맞추는 라벨 */
const FORM_LABEL_CONTROL_CLASS =
  'shrink-0 whitespace-nowrap text-sm sm:flex sm:min-h-11 sm:items-center sm:text-base';

/** min-h-6 라디오 행과 맞추는 라벨 */
const FORM_LABEL_COMPACT_CLASS =
  'shrink-0 whitespace-nowrap text-sm sm:flex sm:min-h-6 sm:items-center sm:text-base';

type FormFieldRowProps = {
  label: string;
  htmlFor?: string;
  children: ReactNode;
  /** 라벨 세로 기준 — control: h-11 입력, compact: min-h-6 라디오 */
  labelSize?: 'control' | 'compact';
  /** 보조 문구가 있어 입력만 라벨과 맞출 때 */
  alignWithInputOnly?: boolean;
};

type InputWithSuffixProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix: string;
  error?: boolean;
};

function InputWithSuffix({ suffix, className, error, ...props }: InputWithSuffixProps) {
  const suffixPadding = suffix.length > 1 ? 'pr-14' : 'pr-10';

  return (
    <div className="relative min-w-0 flex-1">
      <Input
        className={cn(suffixPadding, className)}
        error={error}
        {...props}
      />
      <span
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        aria-hidden
      >
        {suffix}
      </span>
    </div>
  );
}

type StepButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};

function StepButton({ label, onClick, disabled, children }: StepButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="h-11 w-10 shrink-0 rounded-lg"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </Button>
  );
}

type FieldWithStepButtonsProps = {
  children: ReactNode;
  onDecrement: () => void;
  onIncrement: () => void;
  decrementDisabled?: boolean;
  incrementDisabled?: boolean;
  decrementLabel: string;
  incrementLabel: string;
};

function FieldWithStepButtons({
  children,
  onDecrement,
  onIncrement,
  decrementDisabled,
  incrementDisabled,
  decrementLabel,
  incrementLabel,
}: FieldWithStepButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      {children}
      <div className="hidden shrink-0 items-center gap-1 sm:flex">
        <StepButton
          label={decrementLabel}
          onClick={onDecrement}
          disabled={decrementDisabled}
        >
          <Minus className="h-4 w-4" aria-hidden />
        </StepButton>
        <StepButton
          label={incrementLabel}
          onClick={onIncrement}
          disabled={incrementDisabled}
        >
          <Plus className="h-4 w-4" aria-hidden />
        </StepButton>
      </div>
    </div>
  );
}

function FormFieldRow({
  label,
  htmlFor,
  children,
  labelSize = 'control',
  alignWithInputOnly = false,
}: FormFieldRowProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5 sm:flex-row sm:gap-4',
        alignWithInputOnly ? 'sm:items-start' : 'sm:items-center',
      )}
    >
      <Label
        htmlFor={htmlFor}
        className={
          labelSize === 'compact'
            ? FORM_LABEL_COMPACT_CLASS
            : FORM_LABEL_CONTROL_CLASS
        }
      >
        {label}
      </Label>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

type ResultItemProps = {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
};

function ResultItem({ label, value, sub }: ResultItemProps) {
  return (
    <div className="rounded-xl bg-background px-4 py-3 sm:min-w-0 sm:flex-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p
        className={'mt-1 text-2xl font-bold text-foreground'}
      >
        {value}
      </p>
      {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function LoanResultCalculator({
  interestRateText,
  repaymentMethodText,
  className,
}: LoanResultCalculatorProps) {
  const companyRange = useMemo(
    () => parseInterestRateRange(interestRateText),
    [interestRateText],
  );

  const availableMethods = useMemo(
    () => parseAvailableRepaymentMethods(repaymentMethodText),
    [repaymentMethodText],
  );

  const [amountMan, setAmountMan] = useState('100');
  const [repaymentMethod, setRepaymentMethod] = useState<RepaymentMethod>(
    () => availableMethods[0],
  );
  const [termUnit, setTermUnit] = useState<TermUnit>('year');
  const [termMonths, setTermMonths] = useState('12');
  const [annualRate, setAnnualRate] = useState(
    String(getMidInterestRate(companyRange)),
  );

  const activeRepaymentMethod = availableMethods.includes(repaymentMethod)
    ? repaymentMethod
    : availableMethods[0];

  const principal = useMemo(() => {
    const parsed = Number.parseInt(amountMan.replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed * 10_000 : 0;
  }, [amountMan]);

  const months = Number.parseInt(termMonths, 10) || 12;
  const rate = Number.parseFloat(annualRate);
  const validRate = Number.isFinite(rate) && rate >= 0 ? rate : 0;

  const result = useMemo(
    () =>
      calculateLoanResult(
        principal,
        validRate,
        months,
        activeRepaymentMethod,
      ),
    [principal, validRate, months, activeRepaymentMethod],
  );

  const monthlyLabel = (() => {
    switch (activeRepaymentMethod) {
      case 'bullet':
        return '월 이자 (예상)';
      case 'principal':
        return '월 상환액 (첫 달, 예상)';
      default:
        return '월 상환액 (예상)';
    }
  })();

  const termOptions = useMemo(
    () => getRepaymentTermOptions(termUnit),
    [termUnit],
  );

  const termIndex = termOptions.findIndex((option) => option.value === termMonths);
  const safeTermIndex = termIndex >= 0 ? termIndex : 0;

  const selectedTermLabel = useMemo(() => {
    const matched = termOptions.find((option) => option.value === termMonths);
    if (matched) {
      return matched.label;
    }
    const months = Number.parseInt(termMonths, 10) || 12;
    return formatRepaymentTermLabel(months, termUnit);
  }, [termOptions, termMonths, termUnit]);

  const handleTermUnitChange = (unit: TermUnit) => {
    setTermUnit(unit);
    setTermMonths((current) => clampTermMonthsToUnit(current, unit));
  };

  const adjustAmount = (delta: number) => {
    const parsed = Number.parseInt(amountMan.replace(/[^0-9]/g, ''), 10);
    const current = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
    setAmountMan(String(Math.max(1, current + delta)));
  };

  const adjustRate = (delta: number) => {
    const parsed = Number.parseFloat(annualRate);
    const current = Number.isFinite(parsed) ? parsed : 0;
    const next = Math.min(20, Math.max(0, Math.round((current + delta) * 10) / 10));
    setAnnualRate(String(next));
  };

  const totalPaymentSub = (() => {
    if (activeRepaymentMethod === 'bullet' && result.maturityPrincipal) {
      return `만기 원금 ${formatWon(result.maturityPrincipal)} 포함`;
    }
    if (
      activeRepaymentMethod === 'principal' &&
      result.lastMonthPayment !== undefined
    ) {
      return `마지막 달 ${formatWon(result.lastMonthPayment)} · ${months}개월 기준`;
    }
    return `${months}개월 기준`;
  })();

  return (
    <Card className={className}>
      <CardContent className="p-5">
        <div className="flex flex-col gap-0">
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-border">
            <FormFieldRow label="대출 금액" htmlFor="loan-amount">
              <FieldWithStepButtons
                decrementLabel="대출 금액 1만원 감소"
                incrementLabel="대출 금액 1만원 증가"
                onDecrement={() => adjustAmount(-1)}
                onIncrement={() => adjustAmount(1)}
                decrementDisabled={
                  (Number.parseInt(amountMan, 10) || 1) <= 1
                }
              >
                <InputWithSuffix
                  id="loan-amount"
                  suffix="만원"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  value={amountMan}
                  onChange={(event) => setAmountMan(event.target.value)}
                  placeholder="100"
                />
              </FieldWithStepButtons>
            </FormFieldRow>

            <FormFieldRow label="상환 방식" labelSize="compact">
              <RepaymentMethodRadioGroup
                value={activeRepaymentMethod}
                availableMethods={availableMethods}
                onChange={setRepaymentMethod}
              />
            </FormFieldRow>

            <FormFieldRow label="상환 기간" htmlFor="loan-term">
              <FieldWithStepButtons
                decrementLabel="상환 기간 한 단계 감소"
                incrementLabel="상환 기간 한 단계 증가"
                onDecrement={() =>
                  setTermMonths(
                    stepRepaymentTermMonths(termMonths, -1, termUnit),
                  )
                }
                onIncrement={() =>
                  setTermMonths(
                    stepRepaymentTermMonths(termMonths, 1, termUnit),
                  )
                }
                decrementDisabled={safeTermIndex <= 0}
                incrementDisabled={safeTermIndex >= termOptions.length - 1}
              >
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <Select
                    value={termUnit}
                    onValueChange={(value) =>
                      handleTermUnitChange(value as TermUnit)
                    }
                  >
                    <SelectTrigger
                      className={cn(
                        TERM_UNIT_SELECT_WIDTH_CLASS,
                        'shrink-0 [&>span]:max-w-none [&>span]:overflow-visible',
                      )}
                      aria-label="상환 기간 단위"
                    >
                      <SelectValue>{TERM_UNIT_LABELS[termUnit]}</SelectValue>
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className={TERM_UNIT_SELECT_WIDTH_CLASS}
                    >
                      {(Object.keys(TERM_UNIT_LABELS) as TermUnit[]).map(
                        (unit) => (
                          <SelectItem key={unit} value={unit}>
                            {TERM_UNIT_LABELS[unit]}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <div className="min-w-0 flex-1">
                    <Select value={termMonths} onValueChange={setTermMonths}>
                      <SelectTrigger id="loan-term" aria-label="상환 기간">
                        <SelectValue placeholder="기간 선택">
                          {selectedTermLabel}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper" className="min-w-max">
                        {termOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </FieldWithStepButtons>
            </FormFieldRow>

            <FormFieldRow
              label="연 이자율"
              htmlFor="loan-rate"
              alignWithInputOnly
            >
              <div className="flex flex-col gap-1">
                <FieldWithStepButtons
                  decrementLabel="연 이자율 1%p 감소"
                  incrementLabel="연 이자율 1%p 증가"
                  onDecrement={() => adjustRate(-1)}
                  onIncrement={() => adjustRate(1)}
                  decrementDisabled={validRate <= 0}
                  incrementDisabled={validRate >= 20}
                >
                  <InputWithSuffix
                    id="loan-rate"
                    suffix="%"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={20}
                    step={0.1}
                    value={annualRate}
                    onChange={(event) => setAnnualRate(event.target.value)}
                  />
                </FieldWithStepButtons>
                {interestRateText && (
                  <p className="text-sm text-muted-foreground">
                    업체 안내 {interestRateText}
                  </p>
                )}
              </div>
            </FormFieldRow>
          </div>

          {principal > 0 && (
            <div className="rounded-xl border border-border bg-orange-400 p-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <ResultItem
                  label={monthlyLabel}
                  value={formatWon(result.monthlyPayment)}
                />
                <ResultItem
                  label="예상 이자 합계"
                  value={formatWon(result.totalInterest)}
                />
                <ResultItem
                  label="총 상환 금액"
                  value={formatWon(result.totalPayment)}
                  sub={totalPaymentSub}
                />
              </div>
            </div>
          )}
        </div>

        <p className="mt-1 pl-2 text-sm leading-relaxed text-muted-foreground">
          법정 최고 연 이자율은 20%입니다. 표시 금액은 단순 계산 결과이며,
          실제 상담 조건과 다를 수 있습니다.
        </p>
      </CardContent>
    </Card>
  );
}
