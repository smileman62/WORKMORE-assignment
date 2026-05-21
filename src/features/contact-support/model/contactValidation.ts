import type { ContactFieldErrors, ContactFormData } from './contactTypes';

function normalizePhone(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 11;
}

export function validateContactForm(
  data: ContactFormData,
  codeSent: boolean,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!data.inquiryType) {
    errors.inquiryType = '문의 유형을 선택해 주세요.';
  }
  if (!data.title.trim()) {
    errors.title = '제목을 입력해 주세요.';
  }
  if (!data.content.trim()) {
    errors.content = '문의 내용을 입력해 주세요.';
  } else if (data.content.trim().length < 10) {
    errors.content = '문의 내용을 10자 이상 입력해 주세요.';
  }
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
  if (!data.privacyConsent) {
    errors.privacyConsent = '개인정보 수집·이용에 동의해 주세요.';
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
