'use client';

import { useMemo, useState } from 'react';

import { mockFaqs, type FaqAudience } from '@/features/contact-support/model/faqMock';
import { FaqAccordion } from '@/features/contact-support/ui/FaqAccordion';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import { SearchBar } from '@/shared/ui/search-bar/SearchBar';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

const FAQ_AUDIENCE_TABS: { id: FaqAudience; label: string }[] = [
  { id: 'customer', label: '일반고객 FAQ' },
  { id: 'company', label: '대출업체 FAQ' },
];

export function FaqSection() {
  const [audience, setAudience] = useState<FaqAudience>('customer');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return mockFaqs
      .filter((f) => f.audience === audience)
      .filter(
        (f) =>
          !q ||
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q),
      );
  }, [audience, searchQuery]);

  return (
    <section id="faq" className="scroll-mt-20">
      <SectionTitle
        title="자주 묻는 질문"
        description="먼저 FAQ에서 답을 찾아보세요. 해결되지 않으면 아래 1:1 문의를 이용해 주세요."
      />
      <div className="mt-6 flex flex-col gap-4">
        <SearchBar
          placeholder="FAQ 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery('')}
          aria-label="FAQ 검색"
        />
        <div className="flex gap-2">
          {FAQ_AUDIENCE_TABS.map((tab) => (
            <FilterChip
              key={tab.id}
              selected={audience === tab.id}
              onClick={() => setAudience(tab.id)}
              className="flex-1 justify-center sm:flex-none"
            >
              {tab.label}
            </FilterChip>
          ))}
        </div>
        <FaqAccordion items={filtered} />
      </div>
    </section>
  );
}
