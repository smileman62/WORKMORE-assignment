export type SearchFilter = {
  regions: string[];
  situations: string[];
  /** 단일 상품 선택 */
  product?: string;
  repayment?: string;
  /** 업체명·지역·상품 등 텍스트 검색 */
  keyword?: string;
};

export const EMPTY_SEARCH_FILTER: SearchFilter = {
  regions: [],
  situations: [],
};

export function hasSearchFilter(filter: SearchFilter): boolean {
  return (
    filter.regions.length > 0 ||
    filter.situations.length > 0 ||
    Boolean(filter.product) ||
    Boolean(filter.repayment) ||
    Boolean(filter.keyword?.trim())
  );
}

export function searchFilterToQueryString(filter: SearchFilter): string {
  const params = new URLSearchParams();
  filter.regions.forEach((r) => params.append('region', r));
  filter.situations.forEach((s) => params.append('situation', s));
  if (filter.product) params.set('product', filter.product);
  if (filter.repayment) params.set('repayment', filter.repayment);
  if (filter.keyword?.trim()) params.set('q', filter.keyword.trim());
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export function parseSearchFilterFromParams(
  params: URLSearchParams,
): SearchFilter {
  const productsFromUrl = params.getAll('product');

  return {
    regions: params.getAll('region'),
    situations: params.getAll('situation'),
    product: params.get('product') ?? productsFromUrl[0] ?? undefined,
    repayment: params.get('repayment') ?? undefined,
    keyword: params.get('q') ?? undefined,
  };
}

export function formatSearchFilterSummary(filter: SearchFilter): string {
  const parts = [
    ...filter.regions,
    ...filter.situations,
    ...(filter.product ? [filter.product] : []),
    ...(filter.repayment ? [filter.repayment] : []),
  ];
  return parts.length > 0 ? parts.join(' · ') : '조건을 선택해 주세요';
}
