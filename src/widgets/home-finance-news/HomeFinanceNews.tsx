import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getLatestFinanceNews } from "@/entities/article/lib/filterArticles";
import { mockArticles } from "@/entities/article/model/mock";
import { FinanceNewsPreviewCard } from "@/entities/article/ui/FinanceNewsPreviewCard";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";

const HOME_FINANCE_NEWS_LIMIT = 3;

export function HomeFinanceNews() {
  const articles = getLatestFinanceNews(mockArticles, HOME_FINANCE_NEWS_LIMIT);

  return (
    <section className="bg-background px-4 py-10 md:py-32">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <header className="text-center">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            금융 뉴스 빠르게 알아보기
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            금융 소식을 요점만 정리해서 알려드려요
          </p>
        </header>

        <div
          className={cn(
            "mt-6 flex gap-3 overflow-x-auto pb-2 md:mt-8 md:justify-center md:gap-4",
            "scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {articles.map((article) => (
            <FinanceNewsPreviewCard key={article.id} article={article} />
          ))}

          <Link
            href={ROUTES.info}
            className={cn(
              "flex h-46 w-65 shrink-0 flex-col justify-between rounded-2xl border border-border bg-background p-5 transition-colors",
              "hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            )}
          >
            <p className="text-base font-bold leading-snug text-foreground">
              더 많은 금융 뉴스
              <br />
              보러 가기
            </p>
            <span className="flex justify-end">
              <ArrowRight className="h-5 w-5 text-foreground" aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
