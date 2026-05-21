import type { Company } from '@/entities/loan-company/model/types';

const MAX_FEATURES = 3;

export function buildCompanyFeatures(company: Company): string[] {
  if (company.features && company.features.length > 0) {
    return company.features.slice(0, MAX_FEATURES);
  }

  const tags: string[] = [];
  const { products, situations, consultationTime, summary } = company;

  if (consultationTime?.includes('24') || consultationTime?.startsWith('00:')) {
    tags.push('24시간 상담');
  }
  if (products.some((p) => p.includes('당일'))) {
    tags.push('당일승인');
  }
  if (
    products.some(
      (p) =>
        p.includes('무방문') ||
        p.includes('비대면') ||
        p.includes('온라인') ||
        p.includes('모바일'),
    )
  ) {
    tags.push('무방문');
  }
  if (products.some((p) => p.includes('비상금'))) {
    tags.push('비상금');
  }
  if (products.some((p) => p.includes('소액'))) {
    tags.push('소액 전문');
  }
  if (situations?.includes('직장인')) {
    tags.push('직장인');
  }
  if (
    situations?.includes('사업자') ||
    products.some((p) => p.includes('사업') || p.includes('자영업'))
  ) {
    tags.push('사업자');
  }
  if (situations?.includes('무직자') || products.some((p) => p.includes('무직'))) {
    tags.push('무직자');
  }
  if (situations?.includes('주부') || products.some((p) => p.includes('주부'))) {
    tags.push('주부 맞춤');
  }
  if (situations?.includes('프리랜서') || products.some((p) => p.includes('프리랜서'))) {
    tags.push('프리랜서');
  }
  if (situations?.includes('여성') || products.some((p) => p.includes('여성'))) {
    tags.push('여성 맞춤');
  }

  const unique = [...new Set(tags)];

  if (unique.length < 2 && summary) {
    if (summary.includes('당일') && !unique.includes('당일승인')) {
      unique.push('당일승인');
    }
    if (
      (summary.includes('비대면') || summary.includes('무방문')) &&
      !unique.includes('무방문')
    ) {
      unique.push('무방문');
    }
  }

  if (unique.length === 0) {
    unique.push('전화 상담', '맞춤 한도 조회');
  }

  return unique.slice(0, MAX_FEATURES);
}

export function getCompanyRegionLabels(company: Company): string[] {
  if (company.regionLabels && company.regionLabels.length > 0) {
    return company.regionLabels;
  }

  const split = company.regionLabel
    .split(/[,·/]/)
    .map((part) => part.trim())
    .filter(Boolean);

  return split.length > 0 ? split : [company.regionLabel];
}

/** 인기·광고 업체 카드 상단 강조색 (레이아웃은 동일) */
export function isCardHighlighted(company: Company): boolean {
  return company.isRecommended || company.isAd;
}

export function resolveCardVariant(
  company: Company,
  variant?: 'basic' | 'emphasized' | 'compact' | 'list' | 'grid',
): 'basic' | 'emphasized' | 'compact' {
  if (variant === 'emphasized' || variant === 'compact' || variant === 'basic') {
    return variant;
  }
  if (variant === 'grid') return 'basic';
  if (variant === 'list') return 'basic';
  if (company.isRecommended || company.isAd) return 'emphasized';
  return 'basic';
}
