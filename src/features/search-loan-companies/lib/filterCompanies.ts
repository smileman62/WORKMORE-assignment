import { companyMatchesProduct } from '@/entities/loan-company/lib/matchSearchProduct';
import { companyMatchesRegion } from '@/entities/loan-company/lib/searchOptionCounts';
import type { Company } from '@/entities/loan-company/model/types';

import type { SearchFilter } from '../model/searchFilterTypes';

export type SortOption = 'recommended' | 'latest' | 'name';

function getCompanyListOrder(company: Company): number {
  const match = company.id.match(/(\d+)$/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

export function filterCompanies(
  companies: Company[],
  filter: SearchFilter,
): Company[] {
  return companies.filter((company) => {
    const regionMatch =
      filter.regions.length === 0 ||
      filter.regions.some((region) => companyMatchesRegion(company, region));

    const productMatch =
      !filter.product || companyMatchesProduct(company, filter.product);

    const situationMatch =
      filter.situations.length === 0 ||
      (company.situations?.some((situation) =>
        filter.situations.includes(situation),
      ) ??
        true);

    const keyword = filter.keyword?.trim().toLowerCase();
    const keywordMatch =
      !keyword ||
      [
        company.name,
        company.tagline,
        company.summary,
        company.region,
        company.regionLabel,
        ...company.products,
        ...(company.situations ?? []),
      ].some((text) => text.toLowerCase().includes(keyword));

    return regionMatch && productMatch && situationMatch && keywordMatch;
  });
}

export function sortCompanies(
  companies: Company[],
  sort: SortOption,
): Company[] {
  const sorted = [...companies];

  switch (sort) {
    case 'recommended':
      return sorted.sort((a, b) => {
        if (a.isRecommended !== b.isRecommended) {
          return a.isRecommended ? -1 : 1;
        }
        if (a.isAd !== b.isAd) {
          return a.isAd ? -1 : 1;
        }
        return a.name.localeCompare(b.name, 'ko');
      });
    case 'latest':
      return sorted.sort(
        (a, b) => getCompanyListOrder(b) - getCompanyListOrder(a),
      );
    case 'name':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }
}
