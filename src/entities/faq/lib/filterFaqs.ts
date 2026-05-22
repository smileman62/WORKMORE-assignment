import type { FaqAudience, FaqItem } from '@/entities/faq/model/types';

export type FilterFaqsParams = {
  audience: FaqAudience;
  query?: string;
};

export function filterFaqs(faqs: FaqItem[], params: FilterFaqsParams): FaqItem[] {
  const q = params.query?.trim().toLowerCase() ?? '';

  return faqs
    .filter((f) => f.audience === params.audience)
    .filter(
      (f) =>
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    )
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function paginateFaqs<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: safePage,
    totalPages,
    totalCount: items.length,
  };
}
