import { Badge } from '@/shared/ui/badge/Badge';

export type LoanCompanyBadgeProps = {
  isAd?: boolean;
  isRecommended?: boolean;
  isVerifiedAvailable?: boolean;
};

export function LoanCompanyBadge({
  isAd,
  isRecommended,
  isVerifiedAvailable,
}: LoanCompanyBadgeProps) {
  const listingLabel = isAd ? '광고' : isRecommended ? '추천' : '일반';

  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge variant={isAd ? 'warning' : isRecommended ? 'primary' : 'outline'}>
        {listingLabel}
      </Badge>
      {isVerifiedAvailable ? (
        <Badge variant="success">등록 확인 가능</Badge>
      ) : (
        <Badge variant="outline">등록 확인 필요</Badge>
      )}
    </div>
  );
}
