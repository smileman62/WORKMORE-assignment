import type { ConsultationType } from '@/entities/loan-company/model/types';

export function formatConsultationType(type: ConsultationType): string {
  switch (type) {
    case 'phone':
      return '전화 상담';
    case 'sms':
      return '문자 상담';
    case 'both':
      return '전화·문자 상담';
    default:
      return '상담';
  }
}
