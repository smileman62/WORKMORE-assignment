import Link from 'next/link';

import { BUSINESS_FAQS } from '@/entities/business/model/constants';
import { ROUTES } from '@/shared/constants/routes';
import { AccordionItem } from '@/shared/ui/accordion/Accordion';

export function EnterpriseFaqSection() {
  return (
    <section className="bg-surface px-4 py-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          자주 묻는 사업자 질문
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {BUSINESS_FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              title={faq.question}
              defaultOpen={index === 0}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          더 궁금한 점은{' '}
          <Link
            href={ROUTES.support}
            className="font-medium text-primary hover:underline"
          >
            고객센터 FAQ · 1:1 문의
          </Link>
          에서 확인하세요.
        </p>
      </div>
    </section>
  );
}
