import type { Company, CompanyRegistration } from '@/entities/loan-company/model/types';

/** mock 업체에 등록·영업소 정보 기본값 생성 */
export function buildCompanyRegistration(company: Company): CompanyRegistration {
  const regionPrefix = company.regionLabel.replace('전국', '서울');
  const serial = company.id.replace(/\D/g, '').padStart(4, '0').slice(-4);

  return {
    registrationNumber: `${regionPrefix}-${serial}`,
    representativeName: '상담 시 안내',
    registrationAuthority: `${regionPrefix} 지자체 경제정책 관련 부서`,
    registrationAuthorityPhone: '02-000-0000',
    officeAddress: company.region,
  };
}
