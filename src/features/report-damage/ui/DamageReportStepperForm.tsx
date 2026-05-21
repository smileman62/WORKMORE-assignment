'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { REGION_OPTIONS } from '@/entities/loan-company/model/constants';
import {
  CONSULTATION_PATH_OPTIONS,
  DAMAGE_CATEGORY_OPTIONS,
  DAMAGE_REPORT_STEPS,
} from '@/features/report-damage/model/damageReportConstants';
import { MOCK_VERIFICATION_CODE } from '@/shared/constants/verification';
import {
  INITIAL_DAMAGE_REPORT_FORM,
  type DamageReportFormData,
  type FieldErrors,
} from '@/features/report-damage/model/damageReportTypes';
import {
  hasErrors,
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
} from '@/features/report-damage/model/damageReportValidation';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select';
import { Stepper } from '@/shared/ui/stepper/Stepper';
import { Textarea } from '@/shared/ui/textarea/Textarea';
import { Card, CardContent } from '@/shared/ui/card/Card';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-danger" role="alert">
      {message}
    </p>
  );
}

export function DamageReportStepperForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<DamageReportFormData>(
    INITIAL_DAMAGE_REPORT_FORM,
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [codeSent, setCodeSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const updateField = <K extends keyof DamageReportFormData>(
    key: K,
    value: DamageReportFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSendCode = () => {
    const stepErrors = validateStep3(
      { ...form, verificationCode: '' },
      false,
    );
    if (stepErrors.mobilePhone) {
      setErrors(stepErrors);
      return;
    }
    setCodeSent(true);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.mobilePhone;
      return next;
    });
  };

  const goNext = () => {
    let stepErrors: FieldErrors = {};
    if (step === 1) stepErrors = validateStep1(form);
    else if (step === 2) stepErrors = validateStep2(form);
    else if (step === 3) {
      if (
        form.verificationCode.trim() &&
        form.verificationCode.trim() !== MOCK_VERIFICATION_CODE
      ) {
        stepErrors.verificationCode = '인증번호가 일치하지 않아요. (Mock: 123456)';
      } else {
        stepErrors = validateStep3(form, codeSent);
      }
    }

    if (hasErrors(stepErrors)) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    const stepErrors = validateStep4(form);
    if (hasErrors(stepErrors)) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <Card className="border-success/30 bg-success-muted/20">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-success-muted">
            <CheckCircle2 className="h-8 w-8 text-success" aria-hidden />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            피해신고가 접수됐어요
          </h2>
          <p className="text-sm text-muted-foreground">
            금감원 1332 또는 경찰 112 신고도 함께 진행해 주세요.
          </p>
          <div className="mt-2 flex w-full max-w-sm flex-col gap-2">
            <Button variant="primary" fullWidth asChild>
              <Link href={ROUTES.safety}>안전센터로 돌아가기</Link>
            </Button>
            <Button variant="outline" fullWidth asChild>
              <Link href={ROUTES.safetyGuide}>불법금융 대응 가이드</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <Stepper steps={[...DAMAGE_REPORT_STEPS]} currentStep={step} />

      <div className="rounded-xl border border-border bg-background p-5 md:p-6">
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-semibold text-foreground">
              피해 업체 정보
            </h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="businessName">상호명</Label>
              <Input
                id="businessName"
                value={form.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
                placeholder="피해 업체 상호명"
                error={!!errors.businessName}
              />
              <FieldError message={errors.businessName} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="consultationPath">상담 경로</Label>
              <Select
                value={form.consultationPath}
                onValueChange={(v) => updateField('consultationPath', v)}
              >
                <SelectTrigger
                  id="consultationPath"
                  error={!!errors.consultationPath}
                >
                  <SelectValue placeholder="상담 경로 선택" />
                </SelectTrigger>
                <SelectContent>
                  {CONSULTATION_PATH_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.consultationPath} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="callNumber">통화 번호</Label>
              <Input
                id="callNumber"
                type="tel"
                value={form.callNumber}
                onChange={(e) => updateField('callNumber', e.target.value)}
                placeholder="010-0000-0000"
                error={!!errors.callNumber}
              />
              <FieldError message={errors.callNumber} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-semibold text-foreground">
              피해 내용 입력
            </h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="damageDate">피해 날짜</Label>
              <Input
                id="damageDate"
                type="date"
                value={form.damageDate}
                onChange={(e) => updateField('damageDate', e.target.value)}
                error={!!errors.damageDate}
              />
              <FieldError message={errors.damageDate} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="damageCategory">피해 분류</Label>
              <Select
                value={form.damageCategory}
                onValueChange={(v) => updateField('damageCategory', v)}
              >
                <SelectTrigger
                  id="damageCategory"
                  error={!!errors.damageCategory}
                >
                  <SelectValue placeholder="피해 분류 선택" />
                </SelectTrigger>
                <SelectContent>
                  {DAMAGE_CATEGORY_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.damageCategory} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="region">지역</Label>
              <Select
                value={form.region}
                onValueChange={(v) => updateField('region', v)}
              >
                <SelectTrigger id="region" error={!!errors.region}>
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  {REGION_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.region} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="detail">상세 내용</Label>
              <Textarea
                id="detail"
                value={form.detail}
                onChange={(e) => updateField('detail', e.target.value)}
                placeholder="피해 상황을 차분히 적어 주세요. 날짜, 금액, 연락 방식 등을 포함하면 도움이 됩니다."
                error={!!errors.detail}
              />
              <FieldError message={errors.detail} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-semibold text-foreground">
              본인 인증
            </h2>
            <p className="text-sm text-muted-foreground">
              접수 확인을 위해 휴대폰 인증이 필요해요. (Mock: 인증번호{' '}
              {MOCK_VERIFICATION_CODE})
            </p>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mobilePhone">휴대폰 번호</Label>
              <div className="flex gap-2">
                <Input
                  id="mobilePhone"
                  type="tel"
                  className="flex-1"
                  value={form.mobilePhone}
                  onChange={(e) => updateField('mobilePhone', e.target.value)}
                  placeholder="010-0000-0000"
                  error={!!errors.mobilePhone}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSendCode}
                  className="shrink-0"
                >
                  인증 요청
                </Button>
              </div>
              <FieldError message={errors.mobilePhone} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="verificationCode">인증번호</Label>
              <Input
                id="verificationCode"
                inputMode="numeric"
                maxLength={6}
                value={form.verificationCode}
                onChange={(e) =>
                  updateField('verificationCode', e.target.value)
                }
                placeholder="6자리"
                disabled={!codeSent}
                error={!!errors.verificationCode}
              />
              <FieldError message={errors.verificationCode} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-semibold text-foreground">
              약관 동의 및 접수
            </h2>
            <div
              className={cn(
                'rounded-lg border p-4 text-sm text-muted-foreground',
                errors.privacyConsent ? 'border-danger' : 'border-border',
              )}
            >
              <p className="font-medium text-foreground">개인정보 수집·이용 안내</p>
              <p className="mt-2">
                피해 신고 처리를 위해 입력하신 정보를 접수·보관합니다. 관련
                법령에 따라 필요한 기간 동안 보관 후 파기합니다.
              </p>
            </div>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.privacyConsent}
                onChange={(e) =>
                  updateField('privacyConsent', e.target.checked)
                }
                className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-foreground">
                개인정보 수집·이용에 동의합니다 (필수)
              </span>
            </label>
            <FieldError message={errors.privacyConsent} />
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
        {step > 1 ? (
          <Button type="button" variant="outline" onClick={goBack}>
            이전
          </Button>
        ) : (
          <div className="hidden sm:block" />
        )}
        {step < 4 ? (
          <Button type="button" variant="primary" onClick={goNext} fullWidth className="sm:w-auto sm:min-w-[120px]">
            다음
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            fullWidth
            className="sm:w-auto sm:min-w-[120px]"
          >
            신고 접수하기
          </Button>
        )}
      </div>
    </div>
  );
}
