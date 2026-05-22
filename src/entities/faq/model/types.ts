export type FaqAudience = 'customer' | 'company';

export type FaqItem = {
  id: string;
  audience: FaqAudience;
  question: string;
  answer: string;
  publishedAt: string;
};
