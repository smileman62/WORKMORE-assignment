export const ROUTES = {
  home: '/',
  search: '/search',
  companies: '/companies',
  companyDetail: (id: string) => `/companies/${id}`,
  safety: '/safety',
  safetyVerifyCompany: '/safety/verify-company',
  safetyFraudNumber: '/safety/fraud-number',
  safetyReport: '/safety/report',
  safetyGuide: '/safety/guide',
  info: '/info',
  infoArticle: (id: string) => `/info/${id}`,
  support: '/support',
  business: '/business',
  businessLogin: '/business/login',
  businessJoin: '/business/join',
  businessInquiry: '/business#inquiry',
  /** @deprecated ROUTES.info 사용 */
  community: '/info',
} as const;

/** @deprecated ROUTES.safetyGuide 사용 */
export const LEGACY_SAFETY_ROUTES = {
  corpCheck: '/safety/corp-check',
  fraudSearch: '/safety/fraud-search',
  illegalFinanceGuide: '/safety/illegal-finance-guide',
} as const;
