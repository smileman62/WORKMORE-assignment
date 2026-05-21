import Link from 'next/link';
import { AlertTriangle, Calculator, MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';

import { ROUTES } from '@/shared/constants/routes';

function FooterColumnTitle({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-base font-bold text-foreground">{children}</h3>
      {action}
    </div>
  );
}

function FooterIconLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof AlertTriangle;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="grid grid-cols-3 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* 고객센터 */}
          <section aria-labelledby="footer-customer-center">
            <FooterColumnTitle>고객센터</FooterColumnTitle>
            <a
              href="tel:1599-9687"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary md:text-3xl"
            >
              <MessageCircle className="h-7 w-7 shrink-0" aria-hidden />
              1599-9687
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              평일 10:00 ~ 17:00 / 점심시간 12:30 ~ 13:30
              <br />
              (주말 및 공휴일 휴무)
            </p>
            <div className="mt-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-primary">계좌정보</span>{' '}
                <span className="inline-flex items-center gap-1">
                  <span className="rounded bg-[#60584c] px-1.5 py-0.5 text-[10px] font-bold text-white">
                    KB
                  </span>
                  KB국민은행 92470-2470-61
                </span>
              </p>
              <p className="mt-1">예금주 주식회사 대출나라대부중개</p>
            </div>
          </section>

          {/* 대출 중개 플랫폼 */}
          <section aria-labelledby="footer-platform">
            <FooterColumnTitle
              action={
                <FooterIconLink
                  href={ROUTES.safetyGuide}
                  icon={AlertTriangle}
                  label="주의사항"
                />
              }
            >
              대출 중개 플랫폼, 대출나라
            </FooterColumnTitle>
            <p className="text-sm leading-relaxed text-muted-foreground">
              대출나라는 광고 플랫폼만 제공할 뿐 직접적인 대출 및 중개를 하지
              않으며 금융위원회, 지자체 정식 대부업(중개업 포함) 등록 업체만
              광고 등록합니다. 대출나라에 기재된 광고 내용은 대부(중개업)
              업체가 제공하는 정보로서 이를 신뢰하여 취한 조치에 대하여 어떠한
              책임을 지지 않습니다.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-primary">
              중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게
              큰 불행을 안겨줄 수 있습니다. 대출 시 신용등급 또는
              개인신용평점 하락으로 다른 금융거래가 제약받을 수 있습니다.
            </p>
          </section>

          {/* 금리 및 상환 */}
          <section aria-labelledby="footer-rates">
            <FooterColumnTitle

            >
              금리 및 상환안내
            </FooterColumnTitle>
            <p className="text-sm leading-relaxed text-muted-foreground">
              금리 연 20% 이내 (연체이자율 포함 20% 이내)(단, 2021. 7. 7부터
              체결, 갱신, 연장 되는 계약에 한함), 취급수수료 없음, 중도상환
              수수료 없음, 중개수수료 없음, 추가비용 없음.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 : 100만원을 12개월
              기간 동안 최대 금리 연 20% 적용하여 원리금균등상환방법으로
              이용하는 경우 총 상환 금액 1,111,614원 (단, 대출상품 및
              상환방법 등 대출계약 내용에 따라 달라질 수 있습니다.) 채무의
              조기상환수수료율 등 조기상환조건 없음.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
            <p>
              사이트명 : 대출나라대부중개 | 대표자 : 신준식 | 팩스번호 :
              02-543-4569
            </p>
            <p>
              대부중개업 상호명 : 주식회사 대출나라대부중개 | 등록번호 :
              2025-서울강남-0111(대부중개업)
            </p>
            <p>
              주소 : 서울특별시 강남구 선릉로 655, 16층 (논현동, 디에이원타워) |
              등록기관 : 서울 강남구 지역경제과 02-3423-5522
            </p>
            <p>
              사업자정보 : 주식회사 대출나라대부중개 439-81-03602 |
              통신판매업신고번호 : 제2025-서울강남-03876호 | 개인정보책임자 :
              신준식
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground/80">
            COPYRIGHT © 2014. 주식회사 대출나라대부중개 ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
