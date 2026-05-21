import { mockCompanies } from '@/entities/loan-company/model/mock';
import { LoanCompanyCard } from '@/entities/loan-company/ui/LoanCompanyCard';
import { ROUTES } from '@/shared/constants/routes';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

const PREVIEW_COUNT = 3;

export function CompanyPreviewSection() {
  const previewCompanies = mockCompanies
    .filter((c) => c.isRecommended || c.isAd)
    .slice(0, PREVIEW_COUNT);

  const companies =
    previewCompanies.length > 0
      ? previewCompanies
      : mockCompanies.slice(0, PREVIEW_COUNT);

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="추천 업체 미리보기"
          description="조건에 맞는 업체를 더 찾아보세요."
          action={{ label: '전체 보기', href: ROUTES.companies }}
        />
        <ul className="mt-6 flex flex-col gap-4">
          {companies.map((company) => (
            <li key={company.id}>
              <LoanCompanyCard company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
