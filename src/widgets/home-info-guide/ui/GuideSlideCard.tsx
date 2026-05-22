'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  AlertCircle,
  Building2,
  ChevronRight,
  Lightbulb,
  Phone,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';

import type { GuideSlide } from '@/widgets/home-info-guide/model/guideSlides';
import { GuideHighlight, GuideSlideShell } from '@/widgets/home-info-guide/ui/GuideSlideShell';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/cn';

function SlideTitle({
  children,
  onDark = true,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <h3
      className={cn(
        'text-2xl font-bold leading-snug md:text-3xl lg:text-[2rem]',
        onDark ? 'text-white' : 'text-foreground',
      )}
    >
      {children}
    </h3>
  );
}

function SlideBody({
  children,
  onDark = true,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        'mt-3 max-w-3xl text-base leading-relaxed md:text-lg',
        onDark ? 'text-white/80' : 'text-muted-foreground',
      )}
    >
      {children}
    </p>
  );
}

function SafetyFooterBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5">
      {children}
    </div>
  );
}

function ServiceFooterBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-primary-muted px-4 py-3.5">
      {children}
    </div>
  );
}

function IntroSlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell slide={slide}>
      <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex flex-1 flex-col">
          <SlideTitle onDark={false}>
            전국 대출업체 찾아주는
            <br />
            검색 사이트
          </SlideTitle>
          <SlideBody onDark={false}>
            고객이 직접 대출업체를 비교하고, 검색하고, 선택할 수 있도록 서비스를
            제공합니다. 상담부터 거래까지 한 번에 쉽고 빠르게 진행할 수 있어요.
          </SlideBody>
          <p className="mt-4 text-sm leading-relaxed text-primary md:text-base">
            <span className="font-bold">TIP</span>{' '}
            광고 중인 등록 업체마다 기준·상품·금리·상환 기간이 다릅니다. 여러
            업체와 상담해 보시는 것이 유리해요.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={ROUTES.companies}
          className="inline-flex items-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          조건으로 업체 찾기
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href={ROUTES.companies}
          className="inline-flex items-center gap-1 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
        >
          전체 업체 보기
        </Link>
      </div>
    </GuideSlideShell>
  );
}

function FssSlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell
      slide={slide}
      footer={
        <Link
          href={ROUTES.safetyVerifyCompany}
          className="flex w-full items-center justify-center gap-1 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground md:text-base"
        >
          등록 업체 조회하고 안전하게 상담하기
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      }
    >
      <SlideTitle>
        <GuideHighlight onDark>금융감독원 등록 여부</GuideHighlight>를
        <br />
        먼저 확인하세요
      </SlideTitle>
      <SlideBody>
        상담 전 금융감독원에 등록된 업체인지 확인하면 불법 업체를 걸러내는 첫
        단계가 됩니다.
      </SlideBody>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        <li className="flex gap-3 rounded-xl bg-white/10 p-4">
          <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div className="text-sm">
            <p className="font-semibold">금융감독원 정식 등록</p>
            <p className="mt-1 text-white/70">등록 업체는 공식 관리·감독을 받고 있어요.</p>
          </div>
        </li>
        <li className="flex gap-3 rounded-xl bg-white/10 p-4">
          <Search className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div className="text-sm">
            <p className="font-semibold">등록 정보 직접 확인</p>
            <p className="mt-1 text-white/70">금융감독원 홈페이지에서 조회할 수 있어요.</p>
          </div>
        </li>
      </ul>
    </GuideSlideShell>
  );
}

function ContactSlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell
      slide={slide}
      footer={
        <SafetyFooterBox>
          <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-white/90">
            업체 정보에 나온 연락처가 맞는지, 사기 번호 검색으로 한 번 더
            확인하세요.
          </p>
        </SafetyFooterBox>
      }
    >
      <SlideTitle>
        연락처와 <GuideHighlight onDark>번호를 꼭</GuideHighlight>
        <br />
        다시 확인하세요
      </SlideTitle>
      <SlideBody>
        의심스러운 번호는 사기 번호 검색으로 먼저 확인한 뒤 상담을 진행하세요.
      </SlideBody>
    </GuideSlideShell>
  );
}

function PrivacySlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell
      slide={slide}
      footer={
        <SafetyFooterBox>
          <Lightbulb className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-white/90">
            공식 등록된 금융업체는{' '}
            <GuideHighlight onDark>꼭 필요한 정보만</GuideHighlight> 요청합니다.
          </p>
        </SafetyFooterBox>
      }
    >
      <SlideTitle>
        과도한 <GuideHighlight onDark>개인정보 요구</GuideHighlight>는
        <br />
        주의하세요
      </SlideTitle>
      <SlideBody>
        주민등록번호, 계좌 비밀번호 등 불필요한 정보를 요구하면 신중히
        확인하세요.
      </SlideBody>
    </GuideSlideShell>
  );
}

function FeeSlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell
      slide={slide}
      footer={
        <SafetyFooterBox>
          <AlertCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-white/90">
            의심스러운 요청이 있다면 거래를 중단하고 반드시 확인하세요.
          </p>
        </SafetyFooterBox>
      }
    >
      <SlideTitle>
        <GuideHighlight onDark>선입금</GuideHighlight>이나
        <br />
        과도한 수수료 요구는 주의하세요
      </SlideTitle>
      <SlideBody>
        상담 전 선입금·비정상 수수료를 요구하면 거래를 중단하고 확인하세요.
        정식 등록 업체는 상담 전 선입금을 요구하지 않습니다.
      </SlideBody>
    </GuideSlideShell>
  );
}

function PlatformSlide({ slide }: { slide: GuideSlide }) {
  return (
    <GuideSlideShell
      slide={slide}
      footer={
        <ServiceFooterBox>
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
            대출 거래는 신중한 판단이 중요합니다. 충분히 비교하고 현명하게
            결정하세요.
          </p>
        </ServiceFooterBox>
      }
    >
      <SlideTitle onDark={false}>
        <GuideHighlight>대출나라</GuideHighlight>는 직접 대출하지 않습니다
      </SlideTitle>
      <div className="my-4 h-0.5 w-10 bg-primary" aria-hidden />
      <ul className="space-y-4 text-base leading-relaxed md:text-lg">
        <li className="flex gap-3">
          <Search className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <span className="text-muted-foreground">
            다양한 <GuideHighlight>대출업체</GuideHighlight>를 찾고 확인할 수 있는
            플랫폼입니다.
          </span>
        </li>
        <li className="flex gap-3">
          <Building2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <span className="text-muted-foreground">
            여러 업체 조건을 <GuideHighlight>비교하고</GuideHighlight> 신중하게
            선택하세요.
          </span>
        </li>
        <li className="flex gap-3">
          <Users className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <span className="text-muted-foreground">
            상담 전 <GuideHighlight>업체 정보</GuideHighlight>를 확인하고 검토해
            주세요.
          </span>
        </li>
      </ul>
    </GuideSlideShell>
  );
}

export function GuideSlideCard({ slide }: { slide: GuideSlide }) {
  switch (slide.variant) {
    case 'intro':
      return <IntroSlide slide={slide} />;
    case 'fss':
      return <FssSlide slide={slide} />;
    case 'contact':
      return <ContactSlide slide={slide} />;
    case 'privacy':
      return <PrivacySlide slide={slide} />;
    case 'fee':
      return <FeeSlide slide={slide} />;
    case 'platform':
      return <PlatformSlide slide={slide} />;
    default:
      return null;
  }
}
