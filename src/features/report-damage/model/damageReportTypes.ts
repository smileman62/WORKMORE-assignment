export type DamageReportFormData = {
  businessName: string;
  consultationPath: string;
  callNumber: string;
  damageDate: string;
  damageCategory: string;
  region: string;
  detail: string;
  mobilePhone: string;
  verificationCode: string;
  privacyConsent: boolean;
};

export const INITIAL_DAMAGE_REPORT_FORM: DamageReportFormData = {
  businessName: '',
  consultationPath: '',
  callNumber: '',
  damageDate: '',
  damageCategory: '',
  region: '',
  detail: '',
  mobilePhone: '',
  verificationCode: '',
  privacyConsent: false,
};

export type FieldErrors = Partial<Record<keyof DamageReportFormData, string>>;
