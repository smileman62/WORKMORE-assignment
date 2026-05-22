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
  notice: '/notice',
  noticeDetail: (id: string) => `/notice/${id}`,
  support: '/support',
  supportFaq: '/support/faq',
  supportFaqDetail: (id: string) => `/support/faq/${id}`,
  supportInquiry: '/support/inquiry',
  enterprise: '/enterprise',
  enterprisePricing: '/enterprise/pricing',
  enterpriseJoin: '/enterprise/join',
  enterpriseLogin: '/enterprise/login',
  enterpriseInquiry: '/enterprise/inquiry',
  /** @deprecated enterprise 경로 사용 */
  business: '/enterprise',
  /** @deprecated ROUTES.enterpriseLogin 사용 */
  businessLogin: '/enterprise/login',
  /** @deprecated ROUTES.enterpriseJoin 사용 */
  businessJoin: '/enterprise/join',
  /** @deprecated ROUTES.enterpriseInquiry 사용 */
  businessInquiry: '/enterprise/inquiry',
  community: '/community',
} as const;

/** @deprecated ROUTES.safetyGuide 사용 */
export const LEGACY_SAFETY_ROUTES = {
  corpCheck: '/safety/corp-check',
  fraudSearch: '/safety/fraud-search',
  illegalFinanceGuide: '/safety/illegal-finance-guide',
} as const;
