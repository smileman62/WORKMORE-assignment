# AGENTS.md

## Project Overview

이 프로젝트는 기존 `대출나라.com`을 현대적인 UX/UI 기준으로 재해석하는 프론트엔드 리팩토링 과제입니다.

기존 사이트의 핵심 기능은 다음과 같습니다.

- 대출 업체 탐색
- 지역별 업체 찾기
- 상품별 업체 찾기
- 맞춤 검색
- 업체 상세 정보 확인
- 정식 등록 업체 조회
- 사기 번호 검색
- 피해 신고
- 금융 정보 / FAQ / 고객센터
- 사업자 광고 문의 / 로그인 / 회원가입

본 프로젝트의 목표는 단순히 화면을 예쁘게 바꾸는 것이 아니라, 복잡하게 흩어진 정보를 사용자의 목적 중심으로 재구성하는 것입니다.

핵심 방향은 다음과 같습니다.

- 사용자가 “무엇을 해야 하는지” 즉시 이해할 수 있는 구조
- 검색, 필터, 상세, 안전 확인이 자연스럽게 이어지는 플로우
- 금융 서비스에 맞는 신뢰감 있는 톤앤매너
- 과도한 광고성 UI를 줄이고, 정보 우선순위를 명확히 정리
- 모바일 앱처럼 빠르고 단순한 사용 경험 제공

참고하는 UX/UI 방향성은 다음 서비스입니다.

- Toss: 짧고 명확한 금융 UX Writing, 간결한 정보 구조
- Wanted: 목적 중심의 명확한 내비게이션과 카드형 리스트
- Zigbang: 탐색 → 필터 → 상세 확인의 구조화된 경험
- 33m2: 지역/조건 기반 탐색과 카드 중심의 간단한 비교 경험

---

## Current Task Scope

현재 과제 단계에서는 **API 연동을 고려하지 않고 UI/UX 개발에만 전념합니다.**

구현 우선순위는 다음과 같습니다.

```txt
1. 화면 구조 설계
2. 디자인 시스템 적용
3. PC / 모바일 반응형 레이아웃 구현
4. 주요 컴포넌트 구현
5. Mock Data 기반 화면 조립
6. 인터랙션, 상태, 접근성 보완
7. 시각적 완성도 개선
```

현재 단계에서 하지 않을 작업은 다음과 같습니다.

```txt
- 실제 API 연동
- 로그인 / 회원가입 인증 처리
- 서버 상태 관리 연결
- 실제 피해 신고 제출
- 실제 업체 조회 요청
- 결제 / 광고 상품 신청 로직
- 백엔드 스키마 확정
```

단, 실제 API 연동을 나중에 붙일 수 있도록 **타입, mock data, 컴포넌트 props 구조는 확장 가능하게 작성합니다.**

즉, 지금은 `API 구현`이 아니라 **실제 서비스처럼 보이고 동작하는 UI/UX 프로토타입 완성**이 목표입니다.


---

## Tech Stack

프로젝트는 다음 기술 스택을 기준으로 작성합니다.

```txt
Next.js
TypeScript
Tailwind CSS
shadcn/ui
React Hook Form
Zod
TanStack Query
Zustand
Lucide React
```

### Core Stack

- `Next.js App Router`를 사용합니다.
- 모든 코드는 `TypeScript`로 작성합니다.
- 스타일링은 `Tailwind CSS`를 기본으로 합니다.
- 기본 UI 컴포넌트는 `shadcn/ui`를 활용합니다.
- 아이콘은 `lucide-react`를 사용합니다.
- 폼 검증은 `React Hook Form + Zod` 조합을 사용합니다.
- 서버 상태가 필요한 경우 `TanStack Query`를 사용합니다.
- 전역 UI 상태가 필요한 경우 `Zustand`를 사용합니다.

---

## Architecture

이 프로젝트는 `Next.js App Router + Lite FSD` 구조를 따릅니다.

정석적인 FSD를 과하게 적용하지 않습니다.  
과제성 프로젝트이면서도 페이지 수가 많기 때문에, 유지보수 가능한 수준의 가벼운 FSD 구조를 사용합니다.

기본 레이어는 다음과 같습니다.

```txt
src/
  app/
  views/
  widgets/
  features/
  entities/
  shared/
```

각 레이어의 책임은 명확히 분리합니다.

---

## Folder Structure

권장 폴더 구조는 다음과 같습니다.

```txt
src/
  app/
    layout.tsx
    page.tsx

    search/
      page.tsx

    companies/
      [id]/
        page.tsx

    safety/
      page.tsx
      corp-check/
        page.tsx
      fraud-search/
        page.tsx
      report/
        page.tsx

    community/
      page.tsx

    business/
      page.tsx
      login/
        page.tsx
      join/
        page.tsx

  views/
    home/
      HomePage.tsx

    company-search/
      CompanySearchPage.tsx

    company-detail/
      CompanyDetailPage.tsx

    safety/
      SafetyPage.tsx
      CorpCheckPage.tsx
      FraudSearchPage.tsx
      DamageReportPage.tsx

    community/
      CommunityPage.tsx

    business/
      BusinessPage.tsx
      BusinessLoginPage.tsx
      BusinessJoinPage.tsx

  widgets/
    app-shell/
      AppShell.tsx

    app-header/
      AppHeader.tsx

    app-footer/
      AppFooter.tsx

    mobile-bottom-nav/
      MobileBottomNav.tsx

    search-hero/
      SearchHero.tsx

    quick-service-grid/
      QuickServiceGrid.tsx

    company-list/
      CompanyList.tsx
      CompanyListHeader.tsx

    company-detail-panel/
      CompanyDetailPanel.tsx

    safety-center/
      SafetyCenter.tsx

    business-cta/
      BusinessCta.tsx

  features/
    search-loan-companies/
      ui/
        LoanSearchForm.tsx
        RegionSelect.tsx
        ProductSelect.tsx
      model/
        searchFilterSchema.ts
        searchLoanCompanies.ts
      lib/
        filterCompanies.ts

    filter-companies/
      ui/
        CompanyFilterSheet.tsx
        CompanySortSelect.tsx
      model/
        filterStore.ts

    check-registered-company/
      ui/
        CorpCheckForm.tsx
        CorpCheckResult.tsx
      model/
        corpCheckSchema.ts

    search-fraud-number/
      ui/
        FraudNumberSearchForm.tsx
        FraudNumberResult.tsx
      model/
        fraudNumberSchema.ts

    report-damage/
      ui/
        DamageReportForm.tsx
        DamageReportStepper.tsx
      model/
        damageReportSchema.ts

    contact-support/
      ui/
        ContactForm.tsx
      model/
        contactSchema.ts

  entities/
    loan-company/
      model/
        types.ts
        mock.ts
      ui/
        LoanCompanyCard.tsx
        LoanCompanyBadge.tsx
        LoanCompanyMeta.tsx

    loan-product/
      model/
        types.ts
        mock.ts

    region/
      model/
        types.ts
        constants.ts

    safety/
      model/
        types.ts

    article/
      model/
        types.ts
        mock.ts
      ui/
        ArticleCard.tsx

  shared/
    ui/
      button/
      input/
      select/
      badge/
      card/
      dialog/
      bottom-sheet/
      tabs/

    lib/
      cn.ts
      format.ts

    constants/
      routes.ts
      navigation.ts

    styles/
      globals.css
```

---

## Layer Responsibilities

### app

`app`은 Next.js 라우팅만 담당합니다.

`app/page.tsx` 안에 실제 UI 로직을 직접 작성하지 않습니다.  
각 페이지는 `views`의 Page 컴포넌트를 호출하는 얇은 진입점으로 유지합니다.

```tsx
import { HomePage } from '@/views/home/HomePage';

export default function Page() {
  return <HomePage />;
}
```

동적 라우팅도 동일하게 처리합니다.

```tsx
import { CompanyDetailPage } from '@/views/company-detail/CompanyDetailPage';

export default function Page() {
  return <CompanyDetailPage />;
}
```

### views

`views`는 하나의 페이지 화면을 조립하는 레이어입니다.

`widgets`, `features`, `entities`를 조합하여 실제 페이지를 구성합니다.

예시:

```tsx
export function HomePage() {
  return (
    <>
      <SearchHero />
      <QuickServiceGrid />
      <CompanyList />
      <SafetyCenter />
      <BusinessCta />
    </>
  );
}
```

`views`에서는 복잡한 도메인 로직을 직접 작성하지 않습니다.  
필요한 로직은 `features` 또는 `entities`로 분리합니다.

### widgets

`widgets`는 페이지에서 큰 영역을 차지하는 UI 블록입니다.

예시:

- Header
- Footer
- Search Hero
- Company List
- Safety Center
- Business CTA
- Mobile Bottom Navigation

`widgets`는 여러 `features`와 `entities`를 조합할 수 있습니다.

### features

`features`는 사용자의 행동 단위 기능입니다.

예시:

- 업체 검색
- 업체 필터링
- 정식 업체 조회
- 사기 번호 검색
- 피해 신고
- 고객 문의

너무 작은 단위로 쪼개지 않습니다.

나쁜 예:

```txt
features/select-region
features/reset-filter
features/copy-phone-number
features/open-detail
```

좋은 예:

```txt
features/search-loan-companies
features/check-registered-company
features/search-fraud-number
features/report-damage
```

### entities

`entities`는 도메인 모델과 도메인 UI를 관리합니다.

예시:

- loan-company
- loan-product
- region
- safety
- article

업체 카드, 업체 뱃지, 업체 메타 정보처럼 특정 도메인에 강하게 묶인 UI는 `entities`에 둡니다.

### shared

`shared`는 프로젝트 전역에서 재사용 가능한 코드입니다.

예시:

- 공통 UI 컴포넌트
- 유틸 함수
- 공통 상수
- 라우트 상수
- 스타일
- `cn` 함수

도메인 지식이 들어간 코드는 `shared`에 두지 않습니다.

---

## Import Rules

기본 import alias는 `@/`를 사용합니다.

```tsx
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { LoanCompanyCard } from '@/entities/loan-company/ui/LoanCompanyCard';
```

상위 레이어가 하위 레이어를 import하는 것은 허용합니다.

```txt
app → views
views → widgets / features / entities / shared
widgets → features / entities / shared
features → entities / shared
entities → shared
shared → 외부 라이브러리
```

반대로 하위 레이어가 상위 레이어를 import하면 안 됩니다.

금지 예시:

```txt
shared → entities
entities → features
features → widgets
widgets → views
views → app
```

---

## Barrel Export Rule

무분별한 `index.ts` barrel export는 지양합니다.

작은 폴더에서 명확한 public API가 필요한 경우에만 사용합니다.

허용 예시:

```txt
shared/lib/index.ts
shared/constants/index.ts
```

지양 예시:

```txt
features/search-loan-companies/index.ts
entities/loan-company/index.ts
widgets/company-list/index.ts
```

컴포넌트 위치를 명확히 알 수 있도록 직접 import를 우선합니다.

---

## Naming Convention

### File and Folder Naming

폴더명은 `kebab-case`를 사용합니다.

```txt
search-loan-companies
check-registered-company
mobile-bottom-nav
```

컴포넌트 파일명은 `PascalCase`를 사용합니다.

```txt
LoanCompanyCard.tsx
SearchHero.tsx
CompanyFilterSheet.tsx
```

유틸 파일명은 `camelCase`를 사용합니다.

```txt
filterCompanies.ts
formatPhoneNumber.ts
```

상수 파일명은 역할에 따라 작성합니다.

```txt
routes.ts
navigation.ts
regions.ts
loanProducts.ts
```

### Code Naming

컴포넌트는 `PascalCase`를 사용합니다.

```tsx
function LoanCompanyCard() {}
```

변수와 함수는 `camelCase`를 사용합니다.

```ts
const selectedRegion = '서울';
const filterCompanies = () => {};
```

상수는 `SNAKE_CASE`를 사용합니다.

```ts
const MAX_VISIBLE_COMPANY_COUNT = 10;
```

타입과 인터페이스는 `PascalCase`를 사용합니다.

```ts
type LoanCompany = {
  id: string;
  name: string;
};
```

---

## Component Design Rules

컴포넌트는 가능한 한 작고 명확한 책임을 가져야 합니다.

하나의 컴포넌트가 다음 역할을 동시에 담당하지 않도록 합니다.

- 데이터 가공
- 상태 관리
- 폼 검증
- API 호출
- 복잡한 렌더링
- 스타일 분기

나쁜 예:

```tsx
function SearchPage() {
  // API 호출
  // 필터 상태
  // 검색 폼
  // 업체 카드 렌더링
  // 모달 관리
  // 정렬 로직
}
```

좋은 예:

```tsx
function CompanySearchPage() {
  return (
    <>
      <LoanSearchForm />
      <CompanyFilterSheet />
      <CompanyList />
    </>
  );
}
```

### Presentational Component

단순히 UI만 그리는 컴포넌트는 props를 통해 데이터를 받습니다.

```tsx
type LoanCompanyCardProps = {
  company: LoanCompany;
};

export function LoanCompanyCard({ company }: LoanCompanyCardProps) {
  return <article>{company.name}</article>;
}
```

### Container Component

데이터 조회, 상태 연결, 이벤트 처리가 필요한 경우 별도 컴포넌트로 분리합니다.

```tsx
export function CompanyList() {
  const companies = useCompanies();

  return (
    <section>
      {companies.map((company) => (
        <LoanCompanyCard key={company.id} company={company} />
      ))}
    </section>
  );
}
```

---

## State Management Rules

상태는 성격에 따라 분리합니다.

### Local State

컴포넌트 내부에서만 쓰는 상태는 `useState`를 사용합니다.

예시:

- 모달 열림 여부
- 탭 선택 상태
- 임시 입력값
- hover/focus 관련 상태

### Form State

폼 상태는 `React Hook Form`을 사용합니다.

검증은 `Zod` 스키마를 기준으로 처리합니다.

```ts
import { z } from 'zod';

export const searchFilterSchema = z.object({
  region: z.string().optional(),
  product: z.string().optional(),
  keyword: z.string().optional(),
});
```

### Server State

API 데이터, 서버에서 받아온 리스트, 상세 정보는 `TanStack Query`를 사용합니다.

예시:

- 업체 목록 조회
- 업체 상세 조회
- 정식 업체 조회 결과
- 사기 번호 검색 결과
- 게시글 목록

### Global Client State

여러 페이지 또는 여러 컴포넌트에서 공유해야 하는 클라이언트 상태는 `Zustand`를 사용합니다.

예시:

- 모바일 필터 바텀시트 열림 상태
- 최근 검색 조건
- 선택된 업체 비교 목록
- 앱 전역 UI 상태

불필요하게 모든 상태를 Zustand에 넣지 않습니다.

---

## UI/UX Principles

이 프로젝트의 UI/UX는 금융 서비스에 맞는 신뢰감, 간결함, 명확성을 우선합니다.

### Core UX Direction

- 첫 화면에서 사용자가 할 수 있는 행동을 1~2개로 압축합니다.
- 홈의 최우선 행동은 `내 조건으로 업체 찾기`입니다.
- 안전 관련 기능은 보조가 아니라 주요 플로우 안에 포함합니다.
- 광고성 정보와 탐색 정보를 시각적으로 분리합니다.
- 장문 안내는 접거나 요약하고, 필요한 경우 상세 보기로 이동시킵니다.
- 카드 정보는 비교 가능한 구조로 정리합니다.

### Main User Flow

```txt
홈 진입
→ 조건 선택
→ 업체 목록 확인
→ 업체 상세 확인
→ 정식 업체 조회 / 사기 번호 검색
→ 상담 연결
```

### Safety Flow

```txt
홈 또는 상세 페이지
→ 정식 업체 조회
→ 사기 번호 검색
→ 이상 여부 확인
→ 상담 진행 또는 피해 신고
```

### Business Flow

```txt
사업자 페이지
→ 광고 상품 확인
→ 회원가입
→ 로그인
→ 광고 문의
```

---

## Visual Design Principles

전체 디자인은 다음 방향을 따릅니다.

- 배경은 밝고 단정하게 유지합니다.
- 정보 블록은 카드 기반으로 분리합니다.
- 주요 CTA는 하나만 강하게 강조합니다.
- 보조 CTA는 outline 또는 ghost 스타일을 사용합니다.
- 색상은 과하게 사용하지 않습니다.
- 금융 서비스이므로 과도한 그라데이션, 번쩍이는 배너, 과한 애니메이션을 피합니다.
- 여백을 충분히 사용하여 신뢰감 있는 레이아웃을 만듭니다.

### Recommended Tone

```txt
신뢰감 있는
간결한
명확한
차분한
모바일 버전일 경우, 모바일 친화적인
광고 느낌이 덜한
```

### Avoid

```txt
과도한 배너
강한 원색 남용
너무 많은 테두리
정보가 빽빽한 테이블
중복 CTA
자동 롤링 배너
깜빡이는 강조 효과
```

---

## UX Writing Rules

문구는 Toss처럼 짧고 명확하게 작성합니다.

나쁜 예:

```txt
대출나라에서는 고객님들의 편의를 위해 전국 각지에 등록된 수많은 대부업체들의 정보를 제공하고 있으며...
```

좋은 예:

```txt
내 조건에 맞는 등록 업체를 찾아보세요.
```

안전 안내 문구는 숨기지 않되, 짧게 요약합니다.

```txt
대출나라는 직접 대출하지 않습니다.
상담 전 정식 등록 여부를 확인하세요.
```

CTA는 행동 중심으로 작성합니다.

```txt
내 조건으로 업체 찾기
정식 업체 조회하기
사기 번호 검색하기
피해 신고하기
상담 전 확인하기
```

---

## Page Guidelines

### Home Page

홈은 모든 정보를 다 보여주는 페이지가 아닙니다.  
사용자가 탐색을 시작할 수 있도록 돕는 시작점입니다.

필수 섹션:

```txt
1. Search Hero
2. Safety CTA
3. Quick Service Grid
4. Recommended Company Preview
5. Safety Center Preview
6. Information Hub
7. Business CTA
```

홈에서 제거하거나 축소할 것:

```txt
긴 주의사항 전문
과도한 광고 배너
중복 업체 목록
너무 많은 외부 링크
복잡한 통계 정보
```

### Company Search Page

업체 탐색 결과 페이지입니다.

포함 요소:

```txt
검색 조건 요약
필터
정렬
업체 카드 리스트
안전 확인 CTA
빈 결과 화면
```

카드에는 다음 정보를 우선 표시합니다.

```txt
업체명
지역
상품 유형
상담 가능 방식
정식 업체 조회 CTA
상세 보기 CTA
광고 / 추천 여부 라벨
```

### Company Detail Page

업체 상세 페이지는 상담 전 확인에 초점을 둡니다.

포함 요소:

```txt
업체 기본 정보
금리 / 한도 / 상환 방식
상담 가능 시간
연락처
정식 업체 조회 CTA
사기 번호 검색 CTA
주의사항
관련 업체 추천
```

상담 CTA보다 안전 확인 CTA가 먼저 보이도록 설계합니다.

### Safety Page

안전센터는 별도 페이지이면서 동시에 다른 플로우에 연결되어야 합니다.

주요 기능:

```txt
정식 업체 조회
사기 번호 검색
피해 신고
불법 금융 대응 가이드
```

### Business Page

사업자 대상 페이지는 일반 사용자 탐색 플로우와 분리합니다.

포함 요소:

```txt
광고 상품 소개
등록 절차
회원가입
로그인
문의 CTA
```

---

## Styling Rules

Tailwind CSS를 기준으로 스타일링합니다.

공통 class 병합에는 `cn` 유틸을 사용합니다.

```ts
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}
```

컴포넌트 내부 class가 너무 길어지면 variant를 분리합니다.

필요한 경우 `class-variance-authority`를 사용할 수 있습니다.

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-[#D4621A] text-white hover:bg-[#BF5515]',
        secondary: 'bg-[#F5F3EF] text-[#1E1C19] hover:bg-[#EBE8E2]',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
      },
    },
  },
);
```

---

## shadcn/ui Rules

`shadcn/ui` 컴포넌트는 `shared/ui` 하위에 배치합니다.

기본 컴포넌트를 그대로 사용하기보다 프로젝트 톤에 맞게 래핑하거나 확장합니다.

예시:

```txt
shared/ui/button
shared/ui/card
shared/ui/dialog
shared/ui/select
shared/ui/badge
shared/ui/tabs
shared/ui/sheet
```

---

## Accessibility

접근성을 기본 요구사항으로 간주합니다.

- 버튼은 명확한 텍스트 또는 `aria-label`을 가져야 합니다.
- 클릭 가능한 요소는 `button` 또는 `a`를 올바르게 사용합니다.
- 폼 필드는 `label`과 연결합니다.
- 색상만으로 상태를 구분하지 않습니다.
- 모바일 터치 영역은 충분히 크게 유지합니다.
- 키보드 탐색이 가능해야 합니다.
- 모달, 시트, 다이얼로그는 포커스 트랩을 고려합니다.

---

## Mock Data Rules

백엔드가 없는 경우 mock data를 사용합니다.

mock data는 `entities/*/model/mock.ts`에 둡니다.

예시:

```ts
export const loanCompanyMock = [
  {
    id: 'company-1',
    name: '서울희망금융',
    region: '서울',
    products: ['소액대출', '비대면'],
    isAdvertised: true,
    isVerified: true,
  },
];
```

mock data도 실제 API 응답을 예상하여 타입을 먼저 정의합니다.

```ts
export type LoanCompany = {
  id: string;
  name: string;
  region: string;
  products: string[];
  isAdvertised: boolean;
  isVerified: boolean;
};
```

---

## API Rules

현재 과제 단계에서는 **실제 API 연동을 진행하지 않습니다.**

AI 에이전트는 API 구현보다 **UI/UX 완성도, 반응형 레이아웃, 컴포넌트 구조, mock data 기반 화면 조립**에 집중해야 합니다.

### Current Rule

```txt
실제 API 호출 금지
외부 API 연동 금지
백엔드 엔드포인트 가정 구현 금지
fetch / axios 요청 로직 작성 지양
TanStack Query 기반 실제 서버 상태 연결 지양
```

### Mock First

백엔드가 없거나 API 명세가 확정되지 않은 상태에서는 mock data를 사용합니다.

mock data는 다음 위치에 둡니다.

```txt
entities/*/model/mock.ts
features/*/model/mock.ts
```

예시:

```ts
export const loanCompanyMock = [
  {
    id: 'company-1',
    name: '든든금융대부',
    region: '서울 강남구',
    products: ['소액대출', '비대면'],
    isAdvertised: false,
    isVerified: true,
    consultationTime: '09:00 ~ 22:00',
  },
];
```

### Future API Compatibility

실제 API 연동은 지금 하지 않지만, 나중에 API를 붙일 수 있도록 다음은 지킵니다.

```txt
- 도메인 타입을 먼저 정의합니다.
- mock data는 실제 API 응답처럼 작성합니다.
- 컴포넌트는 props 기반으로 데이터를 받습니다.
- API 호출 로직을 컴포넌트 내부에 직접 넣지 않는 구조를 유지합니다.
- loading / empty / error / success 상태 UI는 미리 구현합니다.
```

### Do Not

```txt
- 임의의 API endpoint를 만들어서 연결하지 마세요.
- 실제 서버가 있는 것처럼 axios/fetch 로직을 작성하지 마세요.
- API 미연동 상태를 이유로 UI 구현을 멈추지 마세요.
- 데이터가 필요하면 mock data로 대체하세요.
```

현재 목표는 **실제 데이터 연동이 아니라, 실제 서비스처럼 보이는 UI/UX 구현**입니다.

---

## Error and Empty State

모든 주요 화면은 다음 상태를 고려해야 합니다.

```txt
loading
error
empty
success
```

예시 문구:

```txt
조건에 맞는 업체를 찾지 못했어요.
지역이나 상품 조건을 조금 넓혀보세요.
```

```txt
조회 중 문제가 발생했어요.
잠시 후 다시 시도해 주세요.
```

---

## Mobile First

모바일 우선으로 설계합니다.

우선순위:

```txt
1. 모바일 화면
2. 태블릿 화면
3. 데스크톱 화면
```

모바일에서는 하단 네비게이션을 사용할 수 있습니다.

권장 탭:

```txt
홈
찾기
안전
정보
사업자
```

---

## Performance Rules

- 불필요한 client component를 만들지 않습니다.
- 상호작용이 필요한 컴포넌트만 `'use client'`를 사용합니다.
- 정적 콘텐츠는 가능한 Server Component로 유지합니다.
- 리스트 렌더링 시 key는 안정적인 id를 사용합니다.
- 이미지가 필요한 경우 Next Image 사용을 고려합니다.
- 과도한 애니메이션은 피합니다.

---

## Client Component Rules

`'use client'`는 필요한 파일에만 선언합니다.

필요한 경우:

```txt
폼 입력
필터 상태
모달 / 시트
탭 상호작용
클릭 이벤트
Zustand 사용
React Hook Form 사용
```

불필요한 경우:

```txt
정적 섹션
단순 텍스트
정적 카드
페이지 레이아웃
```

---

## SEO and Metadata

Next.js의 metadata를 활용합니다.

주요 페이지는 제목과 설명을 작성합니다.

```ts
export const metadata = {
  title: '대출나라 리디자인',
  description: '내 조건에 맞는 등록 대출 업체를 찾고 상담 전 안전하게 확인하세요.',
};
```

SEO가 필요한 페이지:

```txt
홈
업체 찾기
지역별 업체 찾기
상품별 업체 찾기
정식 업체 조회
사기 번호 검색
금융 정보
사업자 광고 문의
```

---

## Git and Commit Rules

각 개발 단계가 끝날 때마다 반드시 커밋을 진행합니다.

작업을 크게 한 번에 몰아서 커밋하지 말고, 기능 또는 화면 단위로 나누어 커밋합니다.

### Commit Timing

다음 단위가 완료될 때마다 커밋합니다.

```txt
- 프로젝트 초기 세팅 완료
- 디자인 토큰 / 글로벌 스타일 적용 완료
- 공통 UI 컴포넌트 구현 완료
- Header / Bottom Navigation 구현 완료
- Home 화면 구현 완료
- 검색 Hero / Search Wizard 구현 완료
- 업체 카드 / 업체 리스트 구현 완료
- 안전조회 화면 구현 완료
- 업체 상세 화면 구현 완료
- 피해신고 폼 구현 완료
- 반응형 레이아웃 보완 완료
- 접근성 / Empty / Error / Loading 상태 보완 완료
```

### Commit Message Language

커밋 메시지는 **한글로 작성합니다.**

영문 커밋 메시지를 기본으로 사용하지 않습니다.

### Commit Message Format

커밋 메시지는 다음 형식을 권장합니다.

```txt
타입: 작업 내용
```

예시:

```txt
feat: 홈 화면 검색 히어로 구현
feat: 모바일 하단 네비게이션 구현
feat: 업체 카드 컴포넌트 구현
style: 대출나라 디자인 토큰 적용
style: 검색 결과 카드 간격 조정
fix: 모바일 필터 칩 스크롤 오류 수정
fix: 업체 상세 CTA 고정 위치 수정
refactor: 업체 카드 메타 정보 컴포넌트 분리
refactor: 검색 조건 mock 데이터 분리
docs: AGENTS 작업 규칙 업데이트
chore: shadcn ui 초기 설정
```

### Commit Type

커밋 타입은 아래 prefix를 사용합니다.

```txt
feat: 새로운 화면 또는 기능 구현
fix: 버그 수정
refactor: 구조 개선
style: UI 스타일 수정
docs: 문서 수정
chore: 설정, 패키지, 기타 작업
test: 테스트 코드 추가 또는 수정
```

### Commit Rules

```txt
- 하나의 커밋에는 하나의 목적만 담습니다.
- 커밋 메시지는 한글로 명확하게 작성합니다.
- “수정”, “작업”, “업데이트”처럼 모호한 메시지만 단독으로 쓰지 않습니다.
- UI 작업은 화면 또는 컴포넌트 이름을 포함합니다.
- 커밋 전 lint / build 오류가 없는지 확인합니다.
```

좋은 예:

```txt
feat: PC 검색 결과 필터 패널 구현
style: 모바일 업체 카드 정보 간격 조정
refactor: 안전조회 폼 입력 컴포넌트 분리
```

나쁜 예:

```txt
수정
작업함
업데이트
css 수정
```

---

## PR Guidelines

PR에는 다음 내용을 포함합니다.

```txt
## 작업 내용
- 무엇을 구현했는지 작성합니다.

## 변경 화면
- UI 변경이 있으면 스크린샷을 첨부합니다.

## 확인 사항
- 모바일 확인 여부
- 데스크톱 확인 여부
- 주요 플로우 확인 여부

## 기타
- 남은 작업이나 고민점을 작성합니다.
```

---

## Development Priority

작업 우선순위는 다음과 같습니다.

```txt
1. 프로젝트 세팅
2. App Shell / Header / Bottom Navigation
3. Home Page
4. Search Hero
5. Loan Company Entity
6. Company Card
7. Company Search Page
8. Company Detail Page
9. Safety Center Page
10. Fraud Search / Corp Check Form
11. Business Page
12. Community / FAQ Page
13. 반응형 polish
14. 접근성 / 에러 상태 / 빈 상태 보완
```

---

## Recommended Implementation Scope

과제 제출용 MVP에서는 모든 기능을 완벽히 구현하지 않습니다.

현재 단계의 핵심은 **API 없는 UI/UX 프로토타입 완성**입니다.

우선 구현할 것:

```txt
홈
업체 검색 UI
업체 리스트 UI
업체 상세 UI
정식 업체 조회 UI
사기 번호 검색 UI
안전센터 UI
피해신고 폼 UI
사업자 안내 UI
PC / 모바일 반응형
Loading / Empty / Error / Success 상태
```

mock data로 처리할 것:

```txt
업체 목록 데이터
업체 상세 데이터
정식 업체 조회 결과
사기 번호 검색 결과
피해 신고 접수 결과
금융 뉴스
FAQ
광고 상품
사용자 후기
```

현재 구현하지 않을 것:

```txt
실제 API 연동
로그인
회원가입
실제 인증 처리
사업자 대시보드의 실제 데이터 처리
피해 신고 실제 제출
고객 문의 실제 제출
검색 로그 분석
서버 상태 관리 연결
```

나중에 확장할 것:

```txt
실제 API 연동
로그인 / 회원가입
사업자 대시보드
피해 신고 제출
고객 문의 제출
검색 로그 분석
관리자 기능
```

---

## Design System Direction

공통 디자인 토큰은 다음 방향으로 관리합니다.

### Color

```txt
Primary: Warm Orange / Burnt Orange 계열
Neutral: White / Off White / Warm Gray 계열
Success: Green 계열
Warning: Amber 계열
Danger: Coral / Red 계열
Background: White / Off White / Warm Gray
```

Blue 계열은 사용하지 않습니다.  
Orange는 CTA, 선택 상태, 활성 네비게이션에만 제한적으로 사용합니다.

### Radius

```txt
Card: rounded-2xl
Button: rounded-xl
Input: rounded-xl
Sheet/Dialog: rounded-2xl
```

### Spacing

```txt
Section padding: py-12 ~ py-20
Card padding: p-5 ~ p-6
Mobile horizontal padding: px-4
Desktop max width: max-w-6xl or max-w-7xl
```

---

## Do Not

다음 방식은 피합니다.

```txt
app/page.tsx에 모든 UI 작성
components 폴더 하나에 모든 컴포넌트 몰아넣기
모든 상태를 Zustand에 저장
도메인 컴포넌트를 shared에 배치
긴 안내문을 첫 화면에 그대로 노출
광고 카드와 일반 카드를 구분 없이 노출
모바일 대응 없이 데스크톱만 구현
```

---

## Final Goal

이 프로젝트의 최종 목표는 다음입니다.

```txt
복잡한 대출 업체 탐색 사이트를
신뢰감 있는 금융 탐색 서비스처럼 재구성한다.
```

사용자는 첫 화면에서 바로 다음 질문에 답할 수 있어야 합니다.

```txt
무엇을 할 수 있는가?
어디서 업체를 찾는가?
상담 전 무엇을 확인해야 하는가?
이 업체가 안전한지 어떻게 확인하는가?
```

개발자는 다음 기준으로 코드를 작성합니다.

```txt
페이지는 얇게
기능은 명확하게
도메인은 분리해서
공통 UI는 재사용 가능하게
모바일은 우선적으로
```
