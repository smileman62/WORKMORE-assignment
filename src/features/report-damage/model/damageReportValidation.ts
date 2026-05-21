import type { DamageReportFormData, FieldErrors } from './damageReportTypes';

function normalizePhone(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 11;
}

export function validateStep1(
  data: DamageReportFormData,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.businessName.trim()) {
    errors.businessName = '상호명을 입력해 주세요.';
  }
  if (!data.consultationPath) {
    errors.consultationPath = '상담 경로를 선택해 주세요.';
  }
  if (!data.callNumber.trim()) {
    errors.callNumber = '통화 번호를 입력해 주세요.';
  } else if (!isValidPhone(data.callNumber)) {
    errors.callNumber = '올바른 전화번호 형식을 입력해 주세요.';
  }
  return errors;
}

export function validateStep2(data: DamageReportFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.damageDate) {
    errors.damageDate = '피해 날짜를 선택해 주세요.';
  }
  if (!data.damageCategory) {
    errors.damageCategory = '피해 분류를 선택해 주세요.';
  }
  if (!data.region) {
    errors.region = '지역을 선택해 주세요.';
  }
  if (!data.detail.trim()) {
    errors.detail = '상세 내용을 입력해 주세요.';
  } else if (data.detail.trim().length < 10) {
    errors.detail = '상세 내용을 10자 이상 입력해 주세요.';
  }
  return errors;
}

export function validateStep3(
  data: DamageReportFormData,
  codeSent: boolean,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.mobilePhone.trim()) {
    errors.mobilePhone = '휴대폰 번호를 입력해 주세요.';
  } else if (!isValidPhone(data.mobilePhone)) {
    errors.mobilePhone = '올바른 휴대폰 번호를 입력해 주세요.';
  }
  if (!codeSent) {
    errors.verificationCode = '인증번호를 먼저 요청해 주세요.';
  } else if (!data.verificationCode.trim()) {
    errors.verificationCode = '인증번호를 입력해 주세요.';
  } else if (data.verificationCode.trim().length !== 6) {
    errors.verificationCode = '인증번호 6자리를 입력해 주세요.';
  }
  return errors;
}

export function validateStep4(data: DamageReportFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.privacyConsent) {
    errors.privacyConsent = '개인정보 수집·이용에 동의해 주세요.';
  }
  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
