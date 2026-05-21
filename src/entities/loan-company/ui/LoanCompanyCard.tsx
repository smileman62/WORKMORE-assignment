'use client';

import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Shield,
  User,
} from 'lucide-react';

import {
  buildCompanyFeatures,
  getCompanyRegionLabels,
  isCardHighlighted,
  resolveCardVariant,
} from '@/entities/loan-company/lib/buildCompanyFeatures';
import type { Company } from '@/entities/loan-company/model/types';
import { CompanySideTab } from '@/entities/loan-company/ui/CompanySideTab';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

const CARD_MIN_HEIGHT = 'min-h-[320px]';
const CARD_WIDTH_CLASS = 'w-[280px]';
const MAX_VISIBLE_REGIONS = 3;

export type LoanCompanyCardProps = {
  company: Company;
  className?: string;
  /** basic | emphasized(인기·광고) | compact | list/grid(기본 레이아웃) */
  variant?: 'basic' | 'emphasized' | 'compact' | 'list' | 'grid';
  /** 캐러셀 등 가로 스크롤용 고정 너비 */
  fixedWidth?: boolean;
};

function RegionChips({ regions }: { regions: string[] }) {
  const visibleRegions = regions.slice(0, MAX_VISIBLE_REGIONS);
  const extraCount = regions.length - MAX_VISIBLE_REGIONS;
  const hiddenRegions = regions.slice(MAX_VISIBLE_REGIONS);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {visibleRegions.map((region) => (
        <span
          key={region}
          className="inline-flex max-w-[140px] items-center gap-1 truncate rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
        >
          <MapPin className="h-3 w-3 shrink-0 text-primary" aria-hidden />
          {region}
        </span>
      ))}
      {extraCount > 0 && (
        <span
          className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground"
          title={hiddenRegions.join(', ')}
        >
          외 +{extraCount}
        </span>
      )}
    </div>
  );
}

function FeatureTag({ label }: { label: string }) {
  const Icon = label.includes('24')
    ? Clock
    : label.includes('당일')
      ? Calendar
      : label.includes('무방문') || label.includes('비대면')
        ? User
        : Shield;

  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary-muted px-2 py-1 text-xs font-medium text-primary">
      <Icon className="h-3 w-3 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

function CardFeaturesSection({ features }: { features: string[] }) {
  return (
    <div className="flex min-h-[76px] flex-col gap-2">
      <p className="text-xs font-semibold text-muted-foreground">업체특징</p>
      <div className="flex flex-wrap gap-1.5">
        {features.map((feature) => (
          <FeatureTag key={feature} label={feature} />
        ))}
      </div>
    </div>
  );
}

function PhoneDisplay({ number, className }: { number: string; className?: string }) {
  return (
    <p
      className={cn(
        'mt-auto flex items-center gap-2.5 text-lg font-bold text-primary sm:text-xl',
        className,
      )}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden />
      <span>{number}</span>
    </p>
  );
}

function StandardCardContent({
  company,
  highlighted,
}: {
  company: Company;
  highlighted: boolean;
}) {
  const features = buildCompanyFeatures(company);

  return (
    <div className={cn('flex flex-1 flex-col', CARD_MIN_HEIGHT)}>
      <div
        className={cn(
          'px-5 pb-4 pt-5',
          highlighted ? 'bg-[#f5c9a0]' : 'bg-background',
        )}
      >
        <RegionChips regions={getCompanyRegionLabels(company)} />
        <div className="mt-2.5 flex flex-col">
          <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">
            {company.name}
          </h3>
          <p
            className={cn(
              'line-clamp-2 min-h-[3rem] text-base font-medium leading-relaxed sm:text-[17px]',
              highlighted ? 'text-foreground/85' : 'text-foreground/75',
            )}
          >
            {company.tagline || company.summary}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-background p-5 pt-4">
        <CardFeaturesSection features={features} />
        <PhoneDisplay number={company.contactNumber} className="mt-4" />
      </div>
    </div>
  );
}

function CompactCardContent({ company }: { company: Company }) {
  const features = buildCompanyFeatures(company);
  const highlighted = isCardHighlighted(company);

  return (
    <div className={cn('flex flex-1 flex-col', CARD_MIN_HEIGHT)}>
      <div
        className={cn(
          'px-4 pb-3 pt-4',
          highlighted ? 'bg-[#f5c9a0]' : 'bg-background',
        )}
      >
        <RegionChips regions={getCompanyRegionLabels(company)} />
        <div className="mt-2 flex flex-col gap-1.5">
          <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">
            {company.name}
          </h3>
          <p className="line-clamp-1 text-base font-medium text-foreground/75">
            {company.summary}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-background p-4 pt-3">
        <CardFeaturesSection features={features} />
        <PhoneDisplay number={company.contactNumber} className="mt-3" />
      </div>
    </div>
  );
}

function CardSideTabs({ company }: { company: Company }) {
  if (!company.isRecommended) return null;
  return <CompanySideTab tone="popular" />;
}

export function LoanCompanyCard({
  company,
  className,
  variant = 'list',
  fixedWidth = false,
}: LoanCompanyCardProps) {
  const detailHref = ROUTES.companyDetail(company.id);
  const resolvedVariant = resolveCardVariant(company, variant);
  const highlighted = isCardHighlighted(company);
  const isCompact = resolvedVariant === 'compact';

  return (
    <Link
      href={detailHref}
      className={cn(
        'group block h-full shrink-0 overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        fixedWidth && CARD_WIDTH_CLASS,
        className,
      )}
    >
      <article className="relative h-full overflow-visible">
        <CardSideTabs company={company} />

        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-background transition-colors group-hover:bg-surface">
          {isCompact ? (
            <CompactCardContent company={company} />
          ) : (
            <StandardCardContent company={company} highlighted={highlighted} />
          )}
        </div>
      </article>
    </Link>
  );
}
