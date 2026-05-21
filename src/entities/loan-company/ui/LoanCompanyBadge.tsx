import { Badge } from '@/shared/ui/badge/Badge';

export type LoanCompanyBadgeProps = {
  isAd?: boolean;
  isRecommended?: boolean;
  showListingLabel?: boolean;
};

export function LoanCompanyBadge({
  isAd,
  isRecommended,
  showListingLabel = true,
}: LoanCompanyBadgeProps) {
  if (!isAd && !isRecommended && !showListingLabel) return null;

  const listingLabel = isAd ? '광고' : isRecommended ? '추천' : '일반';

  return (
    <Badge variant={isAd ? 'warning' : isRecommended ? 'primary' : 'outline'}>
      {listingLabel}
    </Badge>
  );
}
