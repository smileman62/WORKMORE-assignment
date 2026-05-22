import { AD_METRICS } from '@/entities/business/model/constants';

export function EnterpriseMetricsSection() {
  return (
    <section className="border-y border-border bg-[#1e1c19] px-4 py-10 text-white md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold md:text-2xl">광고 효과 지표</h2>
        <p className="mt-2 text-sm text-white/70 md:text-base">
          플랫폼 이용 지표 예시입니다. 실제 계약 시 기간·상품별로 안내드립니다.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {AD_METRICS.map((metric) => (
            <li
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center"
            >
              <span className="text-xs text-white/60">{metric.label}</span>
              <p className="mt-2 text-2xl font-bold text-primary md:text-3xl">
                {metric.value}
              </p>
              <span className="mt-1 block text-xs text-white/50">
                {metric.sub}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-white/50">
          * 내부 집계 기준 예시 수치이며, API 연동 후 실시간 데이터로 대체됩니다.
        </p>
      </div>
    </section>
  );
}
