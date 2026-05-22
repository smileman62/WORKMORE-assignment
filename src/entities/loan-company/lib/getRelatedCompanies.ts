import type { Company } from '@/entities/loan-company/model/types';

export const DEFAULT_RELATED_COMPANY_LIMIT = 3;

function countSharedProducts(a: Company, b: Company): number {
  const productSet = new Set(b.products);
  return a.products.filter((product) => productSet.has(product)).length;
}

function scoreRelatedCompany(current: Company, candidate: Company): number {
  let score = 0;

  if (current.regionLabel === candidate.regionLabel) {
    score += 4;
  }

  score += countSharedProducts(current, candidate) * 2;

  const currentSituations = new Set(current.situations ?? []);
  const sharedSituations =
    candidate.situations?.filter((situation) =>
      currentSituations.has(situation),
    ).length ?? 0;
  score += sharedSituations;

  if (candidate.isRecommended) score += 1;
  if (candidate.isAd) score += 0.5;

  return score;
}

function compareRelatedCompanies(a: Company, b: Company): number {
  if (a.isRecommended !== b.isRecommended) {
    return a.isRecommended ? -1 : 1;
  }
  if (a.isAd !== b.isAd) {
    return a.isAd ? -1 : 1;
  }
  return a.name.localeCompare(b.name, 'ko');
}

export function getRelatedCompanies(
  companies: Company[],
  current: Company,
  limit = DEFAULT_RELATED_COMPANY_LIMIT,
): Company[] {
  const candidates = companies.filter((company) => company.id !== current.id);

  if (candidates.length === 0) {
    return [];
  }

  const ranked = [...candidates].sort((a, b) => {
    const scoreDiff =
      scoreRelatedCompany(current, b) - scoreRelatedCompany(current, a);
    if (scoreDiff !== 0) return scoreDiff;
    return compareRelatedCompanies(a, b);
  });

  const withPositiveScore = ranked.filter(
    (company) => scoreRelatedCompany(current, company) > 0,
  );

  const pool = withPositiveScore.length > 0 ? withPositiveScore : ranked;

  return pool.slice(0, limit);
}
