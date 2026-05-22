import { LayoutGrid } from 'lucide-react';

import { AD_PLACEMENTS } from '@/entities/business/model/constants';

export function EnterpriseAdPlacementsSection() {
  return (
    <section className="bg-surface px-4 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          광고 위치 안내
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          이용자 탐색 흐름 안에서 자연스럽게 노출됩니다.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {AD_PLACEMENTS.map((item) => (
            <li
              key={`${item.area}-${item.position}`}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-muted">
                <LayoutGrid className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.area} · {item.position}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
