import type { Company } from '@/entities/loan-company/model/types';

/** 상품명 → 대응 situations (상품 필터 매칭용) */
const PRODUCT_SITUATION_MAP: Record<string, string[]> = {
  직장인대출: ['직장인'],
  무직자대출: ['무직자'],
  여성대출: ['여성'],
  주부대출: ['주부'],
  사업자대출: ['사업자'],
  자영업자대출: ['사업자'],
  프리랜서대출: ['프리랜서'],
  일용직대출: ['프리랜서'],
};

/** 레거시·유사 상품명 매핑 */
const PRODUCT_ALIASES: Record<string, string[]> = {
  개인돈대출: ['신용대출'],
  월변대출: ['기타대출', '당일대출'],
  무방문대출: ['비대면대출', '무방문대출'],
  비대면대출: ['무방문대출', '비대면대출', '온라인대출'],
  모바일대출: ['온라인대출', '비대면대출'],
};

export function companyMatchesProduct(
  company: Company,
  product: string,
): boolean {
  if (company.products.includes(product)) return true;

  const aliasTargets = PRODUCT_ALIASES[product];
  if (aliasTargets?.some((name) => company.products.includes(name))) {
    return true;
  }

  for (const [alias, targets] of Object.entries(PRODUCT_ALIASES)) {
    if (targets.includes(product) && company.products.includes(alias)) {
      return true;
    }
  }

  const situations = PRODUCT_SITUATION_MAP[product];
  if (
    situations &&
    company.situations?.some((s) => situations.includes(s))
  ) {
    return true;
  }

  return false;
}
