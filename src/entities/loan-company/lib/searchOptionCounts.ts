import {
  PRODUCT_ALL_LABEL,
  PRODUCT_FILTER_OPTIONS,
  REGION_ALL_LABEL,
  REGION_FILTER_OPTIONS,
} from '@/entities/loan-company/model/constants';
import { companyMatchesProduct } from '@/entities/loan-company/lib/matchSearchProduct';
import type { Company } from '@/entities/loan-company/model/types';

export function companyMatchesRegion(company: Company, region: string): boolean {
  if (company.regionLabel === region) return true;
  if (company.region.includes(region)) return true;
  if (region === '전국' && company.regionLabel === '전국') return true;
  return false;
}

export function countCompaniesByRegion(
  companies: Company[],
): Record<string, number> {
  const counts: Record<string, number> = {
    [REGION_ALL_LABEL]: companies.length,
  };

  for (const region of REGION_FILTER_OPTIONS) {
    counts[region] = companies.filter((c) => companyMatchesRegion(c, region))
      .length;
  }

  return counts;
}

export function countCompaniesByProduct(
  companies: Company[],
): Record<string, number> {
  const counts: Record<string, number> = {
    [PRODUCT_ALL_LABEL]: companies.length,
  };

  for (const product of PRODUCT_FILTER_OPTIONS) {
    counts[product] = companies.filter((c) =>
      companyMatchesProduct(c, product),
    ).length;
  }

  return counts;
}
