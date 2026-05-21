import { ROUTES } from '@/shared/constants/routes';

export function buildVerifyCompanyHref(options?: {
  businessName?: string;
  phone?: string;
}): string {
  const params = new URLSearchParams();
  if (options?.businessName) {
    params.set('type', 'businessName');
    params.set('q', options.businessName);
  } else if (options?.phone) {
    params.set('type', 'adPhone');
    params.set('q', options.phone);
  }
  const qs = params.toString();
  return qs ? `${ROUTES.safetyVerifyCompany}?${qs}` : ROUTES.safetyVerifyCompany;
}

export function buildFraudNumberHref(phone?: string): string {
  if (!phone) return ROUTES.safetyFraudNumber;
  const params = new URLSearchParams({ phone });
  return `${ROUTES.safetyFraudNumber}?${params}`;
}
