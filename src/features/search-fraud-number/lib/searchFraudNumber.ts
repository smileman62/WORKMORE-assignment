import { mockFraudNumbers } from '@/entities/safety/model/mock';
import type { FraudNumberSearchResult } from '@/entities/safety/model/types';

function normalizePhone(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

export async function searchFraudNumber(
  phone: string,
): Promise<Exclude<FraudNumberSearchResult, { status: 'idle' }>> {
  const normalized = normalizePhone(phone);
  if (!normalized || normalized.length < 9) {
    return { status: 'error' };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  const record = mockFraudNumbers.find((item) => item.phone === normalized);

  if (!record) {
    return { status: 'none' };
  }

  if (record.status === 'suspicious') {
    return { status: 'suspicious', record };
  }

  if (record.status === 'unknown') {
    return { status: 'unknown' };
  }

  return { status: 'none' };
}
