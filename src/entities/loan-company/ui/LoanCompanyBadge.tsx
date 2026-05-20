import { Badge } from '@/shared/ui/badge/Badge';

export type LoanCompanyBadgeProps = {
  isAdvertised?: boolean;
  isVerified?: boolean;
};

export function LoanCompanyBadge({
  isAdvertised,
  isVerified,
}: LoanCompanyBadgeProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {isAdvertised && <Badge variant="primary">추천</Badge>}
      {isVerified ? (
        <Badge variant="success">등록 확인</Badge>
      ) : (
        <Badge variant="outline">미확인</Badge>
      )}
    </div>
  );
}
