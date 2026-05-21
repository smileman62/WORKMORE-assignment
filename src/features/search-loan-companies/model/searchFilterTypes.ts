export type SearchFilter = {
  regions: string[];
  situations: string[];
  products: string[];
};

export const EMPTY_SEARCH_FILTER: SearchFilter = {
  regions: [],
  situations: [],
  products: [],
};

export function hasSearchFilter(filter: SearchFilter): boolean {
  return (
    filter.regions.length > 0 ||
    filter.situations.length > 0 ||
    filter.products.length > 0
  );
}

export function searchFilterToQueryString(filter: SearchFilter): string {
  const params = new URLSearchParams();
  filter.regions.forEach((r) => params.append('region', r));
  filter.situations.forEach((s) => params.append('situation', s));
  filter.products.forEach((p) => params.append('product', p));
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export function parseSearchFilterFromParams(
  params: URLSearchParams,
): SearchFilter {
  return {
    regions: params.getAll('region'),
    situations: params.getAll('situation'),
    products: params.getAll('product'),
  };
}

export function formatSearchFilterSummary(filter: SearchFilter): string {
  const parts = [
    ...filter.regions,
    ...filter.situations,
    ...filter.products,
  ];
  return parts.length > 0 ? parts.join(' · ') : '조건을 선택해 주세요';
}
