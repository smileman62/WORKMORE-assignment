'use client';

import { useState } from 'react';

import { searchFraudNumber } from '@/features/search-fraud-number/lib/searchFraudNumber';
import type { FraudNumberSearchResult } from '@/entities/safety/model/types';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import { FraudNumberResultPanel } from '@/features/search-fraud-number/ui/FraudNumberResultPanel';

export type FraudNumberSearchFormProps = {
  initialPhone?: string;
  className?: string;
};

export function FraudNumberSearchForm({
  initialPhone = '',
  className,
}: FraudNumberSearchFormProps) {
  const [phone, setPhone] = useState(initialPhone);
  const [result, setResult] = useState<FraudNumberSearchResult>({
    status: 'idle',
  });

  const canSubmit = phone.trim().length > 0 && result.status !== 'loading';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setResult({ status: 'loading' });

    try {
      const searchResult = await searchFraudNumber(phone.trim());
      setResult(searchResult);
    } catch {
      setResult({ status: 'error' });
    }
  };

  const handleReset = () => {
    setPhone('');
    setResult({ status: 'idle' });
  };

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <p className="text-sm text-muted-foreground">
        상담 받을 번호를 입력해 사기 의심 이력을 조회해 보세요. 조회만으로는
        등록 여부가 확인되지 않습니다.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fraud-phone">전화번호</Label>
          <Input
            id="fraud-phone"
            type="tel"
            inputMode="tel"
            placeholder="예: 010-1234-5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={!canSubmit}
          isLoading={result.status === 'loading'}
        >
          조회하기
        </Button>
      </form>

      {result.status === 'loading' && (
        <LoadingState message="번호 이력을 조회하는 중이에요" />
      )}

      {result.status !== 'idle' && result.status !== 'loading' && (
        <FraudNumberResultPanel result={result} onReset={handleReset} />
      )}
    </div>
  );
}
