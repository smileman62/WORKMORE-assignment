export const CONSULTATION_PATH_OPTIONS = [
  '대출나라 업체 목록',
  '검색·광고',
  '지인 소개',
  '문자·카카오톡',
  '전화 영업',
  '기타',
] as const;

export const DAMAGE_CATEGORY_OPTIONS = [
  '고금리·불법 이자',
  '불법 추심·협박',
  '대출 사기·선입금',
  '중개 수수료 사기',
  '개인정보 유출',
  '기타',
] as const;

export const DAMAGE_REPORT_STEPS = [
  { id: 1, label: '업체 정보' },
  { id: 2, label: '피해 내용' },
  { id: 3, label: '본인 인증' },
  { id: 4, label: '약관·접수' },
] as const;

export { MOCK_VERIFICATION_CODE } from '@/shared/constants/verification';
