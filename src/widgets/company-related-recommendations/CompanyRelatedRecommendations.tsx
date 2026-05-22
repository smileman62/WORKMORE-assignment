import { getRelatedCompanies } from "@/entities/loan-company/lib/getRelatedCompanies";
import { mockCompanies } from "@/entities/loan-company/model/mock";
import type { Company } from "@/entities/loan-company/model/types";
import { CARD_TAB_SLOT } from "@/entities/loan-company/ui/CompanySideTab";
import { LoanCompanyCard } from "@/entities/loan-company/ui/LoanCompanyCard";
import { cn } from "@/shared/lib/cn";

export type CompanyRelatedRecommendationsProps = {
  company: Company;
};

export function CompanyRelatedRecommendations({
  company,
}: CompanyRelatedRecommendationsProps) {
  const relatedCompanies = getRelatedCompanies(mockCompanies, company);

  if (relatedCompanies.length === 0) {
    return null;
  }

  return (
    <section
      className="w-full bg-background py-10 md:py-12"
      aria-labelledby="related-companies-heading"
    >
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-8">
        <h2
          id="related-companies-heading"
          className="text-lg font-bold text-foreground md:text-xl"
        >
          이런 업체는 어떠세요?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          같은 지역·비슷한 상품을 제공하는 다른 업체입니다.
        </p>
        <ul
          className={cn(
            "bg-muted mt-6 flex w-fit gap-2 pb-5 px-2 rounded-md",
            "scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {relatedCompanies.map((related) => (
            <li
              key={related.id}
              className={cn(
                "shrink-0 list-none",
                CARD_TAB_SLOT.paddingTop,
                CARD_TAB_SLOT.paddingX,
              )}
            >
              <LoanCompanyCard
                company={related}
                variant="grid"
                fixedWidth
                className="h-full overflow-visible"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
