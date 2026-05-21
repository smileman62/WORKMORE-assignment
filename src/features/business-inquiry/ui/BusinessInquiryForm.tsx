'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import { Textarea } from '@/shared/ui/textarea/Textarea';

type InquiryForm = {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  message: string;
};

const INITIAL: InquiryForm = {
  companyName: '',
  contactName: '',
  phone: '',
  email: '',
  message: '',
};

export function BusinessInquiryForm() {
  const [form, setForm] = useState<InquiryForm>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof InquiryForm, string>> = {};
    if (!form.companyName.trim()) next.companyName = '상호명을 입력해 주세요.';
    if (!form.contactName.trim()) next.contactName = '담당자명을 입력해 주세요.';
    if (!form.phone.trim()) next.phone = '연락처를 입력해 주세요.';
    if (!form.message.trim()) next.message = '문의 내용을 입력해 주세요.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <Card className="border-success/30 bg-success-muted/20">
        <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
          <CheckCircle2 className="h-10 w-10 text-success" aria-hidden />
          <p className="font-semibold text-foreground">문의가 접수됐어요</p>
          <p className="text-sm text-muted-foreground">
            영업일 기준 1~2일 내 연락드릴게요.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="inquiry-company">상호명</Label>
          <Input
            id="inquiry-company"
            value={form.companyName}
            onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
            error={!!errors.companyName}
          />
          {errors.companyName && (
            <p className="text-xs text-danger">{errors.companyName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="inquiry-contact">담당자명</Label>
          <Input
            id="inquiry-contact"
            value={form.contactName}
            onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))}
            error={!!errors.contactName}
          />
          {errors.contactName && (
            <p className="text-xs text-danger">{errors.contactName}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="inquiry-phone">연락처</Label>
          <Input
            id="inquiry-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            error={!!errors.phone}
          />
          {errors.phone && <p className="text-xs text-danger">{errors.phone}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="inquiry-email">이메일 (선택)</Label>
          <Input
            id="inquiry-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inquiry-message">문의 내용</Label>
        <Textarea
          id="inquiry-message"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="희망 광고 상품, 지역, 예산 등을 적어 주세요."
          error={!!errors.message}
        />
        {errors.message && <p className="text-xs text-danger">{errors.message}</p>}
      </div>
      <Button type="submit" variant="primary" fullWidth isLoading={isSubmitting}>
        광고 문의 접수
      </Button>
    </form>
  );
}
