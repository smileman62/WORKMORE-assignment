import { LayoutGrid } from 'lucide-react';

import { AD_PLACEMENTS } from '@/entities/business/model/constants';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessAdPlacementsSection() {
  return (
    <section className="bg-surface px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="광고 위치 안내"
          description="이용자 탐색 흐름 안에서 자연스럽게 노출됩니다."
        />
        <ul className="mt-6 flex flex-col gap-3">
          {AD_PLACEMENTS.map((item) => (
            <li
              key={`${item.area}-${item.position}`}
              className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <LayoutGrid className="h-4 w-4 text-foreground" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.area} · {item.position}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
