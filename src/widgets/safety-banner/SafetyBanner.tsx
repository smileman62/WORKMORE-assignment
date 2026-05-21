import { AlertTriangle } from 'lucide-react';

export function SafetyBanner() {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div
          className="flex gap-3 rounded-xl border border-warning/30 bg-warning-muted px-5 py-4"
          role="note"
        >
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-warning"
            aria-hidden
          />
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold text-foreground">안전 안내</p>
            <p className="text-muted-foreground">
              대출나라는 직접 대출하지 않습니다. 상담 전 등록 여부와 번호를
              먼저 확인하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
