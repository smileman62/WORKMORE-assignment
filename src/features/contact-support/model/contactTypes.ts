export type ContactFormData = {
  inquiryType: string;
  title: string;
  content: string;
  mobilePhone: string;
  verificationCode: string;
  privacyConsent: boolean;
};

export const INITIAL_CONTACT_FORM: ContactFormData = {
  inquiryType: '',
  title: '',
  content: '',
  mobilePhone: '',
  verificationCode: '',
  privacyConsent: false,
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

export const INQUIRY_TYPE_OPTIONS = [
  '이용 문의',
  '업체 정보 오류',
  '광고·제휴',
  '기술 오류',
  '기타',
] as const;
