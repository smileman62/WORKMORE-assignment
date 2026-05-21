import { AccordionItem } from '@/shared/ui/accordion/Accordion';
import type { FaqItem } from '@/features/contact-support/model/faqMock';

export type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  if (items.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        검색 결과가 없어요. 다른 키워드로 시도해 보세요.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.question}
          defaultOpen={index === 0}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
