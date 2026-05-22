import Image from "next/image";
import Link from "next/link";

import { ENTERPRISE_HERO_IMAGE } from "@/entities/enterprise/model/content";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button/Button";

export function EnterpriseHero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden">
      <Image
        src={ENTERPRISE_HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-[#1e1c19]/85 via-[#1e1c19]/75 to-[#1e1c19]/90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
          최고의 광고 효율을 자랑하는
          <br />
          <span className="text-primary">대출나라</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          같은 광고비라도 더 큰 효과를 기대할 수 있습니다. 대출이 필요한 고객만
          모인 플랫폼에서 타깃 마케팅이 가능하고, 불필요한 CPC를 줄여 효율적으로
          노출할 수 있습니다.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button variant="primary" size="lg" asChild>
            <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            <Link href={ROUTES.enterprisePricing}>가격 안내</Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="text-white hover:bg-white/10"
          >
            <Link href={ROUTES.enterpriseJoin}>기업 등록하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
