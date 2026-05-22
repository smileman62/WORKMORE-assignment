import Image from 'next/image';

import {
  ENTERPRISE_COMPARISON_ROWS,
  ENTERPRISE_COMPARISON_SECTION,
  ENTERPRISE_PLATFORM_STATS,
  ENTERPRISE_STATS_SECTION,
} from '@/entities/enterprise/model/content';

function EnterpriseStatsBlock() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:gap-16">
      <div>
        <h2 className="text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
          {ENTERPRISE_STATS_SECTION.headline}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          {ENTERPRISE_STATS_SECTION.description}
        </p>

        <dl className="mt-12 flex flex-col gap-10 md:mt-14 md:gap-12">
          {ENTERPRISE_PLATFORM_STATS.map((stat) => (
            <div key={stat.id}>
              <dt className="text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </dt>
              <dd className="mt-1 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-none">
                {stat.value}
              </dd>
              {stat.note ? (
                <p className="mt-1.5 text-xs text-muted-foreground/80 md:text-sm">
                  {stat.note}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-lg sm:max-w-none">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted md:aspect-3/4">
          <Image
            src={ENTERPRISE_STATS_SECTION.image}
            alt={ENTERPRISE_STATS_SECTION.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

function EnterpriseComparisonBlock() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:gap-16">
      <div className="relative order-2 mx-auto w-full max-w-lg sm:order-1 sm:max-w-none">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted md:aspect-3/4">
          <Image
            src={ENTERPRISE_COMPARISON_SECTION.image}
            alt={ENTERPRISE_COMPARISON_SECTION.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="order-1 sm:order-2">
        <h2 className="text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
          {ENTERPRISE_COMPARISON_SECTION.headline}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          {ENTERPRISE_COMPARISON_SECTION.description}
        </p>

        <dl className="mt-12 flex flex-col gap-10 md:mt-14 md:gap-12">
          {ENTERPRISE_COMPARISON_ROWS.map((row) => (
            <div key={row.item}>
              <dt className="text-sm font-medium text-muted-foreground md:text-base">
                {row.item}
              </dt>
              <dd className="mt-1 text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl lg:text-[1.75rem]">
                {row.highlight}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function EnterprisePlatformStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
        <EnterpriseStatsBlock />

        <div className="mt-20 border-t border-border pt-20 md:mt-28 md:pt-28">
          <EnterpriseComparisonBlock />
        </div>
      </div>
    </section>
  );
}
