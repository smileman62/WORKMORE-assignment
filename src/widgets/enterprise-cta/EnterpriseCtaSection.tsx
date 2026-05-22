import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80&auto=format&fit=crop';

export function EnterpriseCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1e1c19] text-white">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">
          지금 바로 대출나라에 등록하세요
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 md:text-base">
          정식 등록 업체만 광고할 수 있습니다. 담당자가 등록·검수·노출까지
          안내해 드립니다.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" asChild>
            <Link href={ROUTES.enterpriseJoin}>기업 등록하기</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <Link href={ROUTES.enterpriseInquiry}>광고 문의하기</Link>
          </Button>
        </div>
        <p className="mt-10 text-lg font-bold text-primary">1599-9687</p>
        <p className="mt-1 text-xs text-white/60">
          평일 10:00 ~ 17:00 (점심 12:30 ~ 13:30)
        </p>
      </div>
    </section>
  );
}
