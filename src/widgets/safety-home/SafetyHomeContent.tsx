import {
  OFFICIAL_AGENCIES,
  SAFETY_DAMAGE_ACTIONS,
  SAFETY_FEATURED_ACTION,
} from "@/widgets/safety-home/model/safetyHomeContent";
import { SafetyActionCard } from "@/widgets/safety-home/ui/SafetyActionCard";

export function SafetyHomeContent() {
  return (
    <div className="flex flex-col gap-10 md:gap-12">
      <section>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          거래 전, 안전부터 확인하세요
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          대출나라는 직접 대출하지 않습니다. 상담·계약 전에 등록 업체와 연락처를
          확인하고, 이상 징후가 있으면 아래에서 바로 대응할 수 있어요.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <SafetyActionCard item={SAFETY_FEATURED_ACTION} featured />

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SAFETY_DAMAGE_ACTIONS.map((item) => (
              <li key={item.id}>
                <SafetyActionCard item={item} className="h-full w-full" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border pt-10">
        <h2 className="text-lg font-semibold text-foreground">
          공식 기관 안내
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          긴급한 피해·범죄 신고는 아래 번호로 먼저 연락하세요.
        </p>

        <ul className="mt-5 flex flex-col gap-3">
          {OFFICIAL_AGENCIES.map((agency) => (
            <li
              key={agency.name}
              className="flex flex-col gap-1 rounded-xl border border-border bg-background px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {agency.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {agency.description}
                </p>
              </div>
              <p className="text-lg font-bold tabular-nums text-primary sm:text-xl">
                {agency.contact}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
