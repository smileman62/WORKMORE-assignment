import { Check } from 'lucide-react';

const CHECKLIST_ITEMS = [
  '상담 업체가 금융감독원 등록 대부업체인지 확인했어요.',
  '광고·상담에 사용한 전화번호를 사기 번호 DB에서 조회했어요.',
  '금리·수수료·상환 조건을 서면 또는 문자로 받았어요.',
  '선입금·보증금·개인정보 과도 요구는 없었어요.',
] as const;

export function SafetyChecklist() {
  return (
    <div className="rounded-xl border border-border bg-surface">
      <ul className="flex flex-col gap-3 p-5">
        {CHECKLIST_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-muted">
              <Check className="h-3.5 w-3.5 text-success" aria-hidden />
            </span>
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
