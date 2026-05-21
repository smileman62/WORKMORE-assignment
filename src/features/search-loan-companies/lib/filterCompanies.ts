import type { Company } from '@/entities/loan-company/model/types';

import type { SearchFilter } from '../model/searchFilterTypes';

export type SortOption = 'recommended' | 'region' | 'name';

export function filterCompanies(
  companies: Company[],
  filter: SearchFilter,
): Company[] {
  return companies.filter((company) => {
    const regionMatch =
      filter.regions.length === 0 ||
      filter.regions.some((region) => company.region.includes(region));

    const productMatch =
      filter.products.length === 0 ||
      filter.products.some((product) => company.products.includes(product));

    const situationMatch =
      filter.situations.length === 0 ||
      (company.situations?.some((situation) =>
        filter.situations.includes(situation),
      ) ??
        true);

    return regionMatch && productMatch && situationMatch;
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
    case 'region':
      return sorted.sort((a, b) =>
        a.region.localeCompare(b.region, 'ko'),
      );
    case 'name':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }
}
