import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

import { getFaqById } from '@/entities/faq/lib/getFaqs';
import type { FaqAudience } from '@/entities/faq/model/types';
import { FaqAnswer } from '@/entities/faq/ui/FaqAnswer';
import { ROUTES } from '@/shared/constants/routes';
import { formatNoticeDate } from '@/shared/lib/format';
import { SupportLayout } from '@/widgets/support-layout/SupportLayout';

const FAQ_AUDIENCE_LABELS: Record<FaqAudience, string> = {
  customer: '일반고객 FAQ',
  company: '대출업체 FAQ',
};

export type SupportFaqDetailPageProps = {
  faqId: string;
};

export function SupportFaqDetailPage({ faqId }: SupportFaqDetailPageProps) {
  const faq = getFaqById(faqId);

  if (!faq) {
    notFound();
  }

  return (
    <SupportLayout>
      <Link
        href={ROUTES.supportFaq}
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
        목록으로
      </Link>

      <p className="mt-6 text-sm font-medium text-primary">
        {FAQ_AUDIENCE_LABELS[faq.audience]}
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug text-foreground md:text-3xl">
        {faq.question}
      </h1>
      <time
        className="mt-4 block text-sm text-muted-foreground"
        dateTime={faq.publishedAt}
      >
        {formatNoticeDate(faq.publishedAt)}
      </time>

      <div className="mt-10 border-t border-border pt-10">
        <FaqAnswer text={faq.answer} />
      </div>
    </SupportLayout>
  );
}
