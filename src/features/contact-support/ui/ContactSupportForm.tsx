'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import {
  INITIAL_CONTACT_FORM,
  INQUIRY_TYPE_OPTIONS,
  type ContactFieldErrors,
  type ContactFormData,
} from '@/features/contact-support/model/contactTypes';
import {
  hasContactErrors,
  validateContactForm,
} from '@/features/contact-support/model/contactValidation';
import { ROUTES } from '@/shared/constants/routes';
import { MOCK_VERIFICATION_CODE } from '@/shared/constants/verification';
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
import { Textarea } from '@/shared/ui/textarea/Textarea';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-danger" role="alert">
      {message}
    </p>
  );
}

export function ContactSupportForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [codeSent, setCodeSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const updateField = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSendCode = () => {
    const phone = form.mobilePhone.trim();
    if (!phone || phone.replace(/[^0-9]/g, '').length < 10) {
      setErrors({ mobilePhone: '올바른 휴대폰 번호를 입력해 주세요.' });
      return;
    }
    setCodeSent(true);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.mobilePhone;
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formErrors = validateContactForm(form, codeSent);
    if (
      form.verificationCode.trim() &&
      form.verificationCode.trim() !== MOCK_VERIFICATION_CODE
    ) {
      formErrors = {
        ...formErrors,
        verificationCode: '인증번호가 일치하지 않아요. (Mock: 123456)',
      };
    }

    if (hasContactErrors(formErrors)) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
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
            문의가 접수됐어요
          </h2>
          <p className="text-sm text-muted-foreground">
            영업일 기준 1~2일 내 답변드릴게요. 긴급한 피해는 안전센터 피해
            신고를 이용해 주세요.
          </p>
          <Button variant="primary" asChild>
            <Link href={ROUTES.supportFaq}>FAQ로 돌아가기</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="inquiryType">문의 유형</Label>
        <Select
          value={form.inquiryType}
          onValueChange={(v) => updateField('inquiryType', v)}
        >
          <SelectTrigger id="inquiryType" error={!!errors.inquiryType}>
            <SelectValue placeholder="유형 선택" />
          </SelectTrigger>
          <SelectContent>
            {INQUIRY_TYPE_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError message={errors.inquiryType} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="문의 제목"
          error={!!errors.title}
        />
        <FieldError message={errors.title} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="content">문의 내용</Label>
        <Textarea
          id="content"
          value={form.content}
          onChange={(e) => updateField('content', e.target.value)}
          placeholder="문의 내용을 구체적으로 적어 주세요."
          error={!!errors.content}
        />
        <FieldError message={errors.content} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-mobile">휴대폰 번호</Label>
        <div className="flex gap-2">
          <Input
            id="contact-mobile"
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
        <Label htmlFor="contact-code">인증번호</Label>
        <Input
          id="contact-code"
          inputMode="numeric"
          maxLength={6}
          value={form.verificationCode}
          onChange={(e) => updateField('verificationCode', e.target.value)}
          placeholder="6자리"
          disabled={!codeSent}
          error={!!errors.verificationCode}
        />
        <FieldError message={errors.verificationCode} />
        <p className="text-xs text-muted-foreground">
          Mock 인증번호: {MOCK_VERIFICATION_CODE}
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={form.privacyConsent}
          onChange={(e) => updateField('privacyConsent', e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-foreground">
          개인정보 수집·이용에 동의합니다 (필수)
        </span>
      </label>
      <FieldError message={errors.privacyConsent} />

      <Button type="submit" variant="primary" fullWidth isLoading={isSubmitting}>
        문의 접수하기
      </Button>
    </form>
  );
}
