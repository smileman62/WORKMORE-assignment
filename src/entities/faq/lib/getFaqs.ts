import { mockFaqs } from '@/entities/faq/model/mock';
import type { FaqItem } from '@/entities/faq/model/types';

export function getFaqs(): FaqItem[] {
  return mockFaqs;
}

export function getFaqById(id: string): FaqItem | undefined {
  return mockFaqs.find((f) => f.id === id);
}
