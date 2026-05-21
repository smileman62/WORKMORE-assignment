import { AD_METRICS } from '@/entities/business/model/constants';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessMetricsSection() {
  return (
    <section className="bg-surface px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="광고 효과 지표"
          description="플랫폼 이용 지표 예시입니다. 실제 계약 시 기간·상품별로 안내드립니다."
        />
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {AD_METRICS.map((metric) => (
            <li
              key={metric.label}
              className="flex flex-col gap-1 rounded-xl border border-border bg-background p-4 text-center"
            >
              <span className="text-xs text-muted-foreground">{metric.label}</span>
              <span className="text-xl font-bold text-foreground">{metric.value}</span>
              <span className="text-xs text-muted-foreground">{metric.sub}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          * 내부 집계 기준 예시 수치이며, API 연동 후 실시간 데이터로 대체됩니다.
        </p>
      </div>
    </section>
  );
}
