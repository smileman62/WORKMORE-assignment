/** 랜딩 통계 섹션 (원티드형 2열) */
export const ENTERPRISE_STATS_SECTION = {
  headline: "대출이 필요한 고객이 모인 플랫폼",
  description: "대출 수요 고객 중심의 트래픽으로 타깃 마케팅을 진행합니다.",
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
  imageAlt: "노트북으로 업무·광고 성과를 확인하는 모습",
} as const;

export const ENTERPRISE_PLATFORM_STATS = [
  {
    id: "visitors",
    value: "4,091만+",
    label: "사이트 누적 방문자 수",
    note: "일일 중복 IP 제외 · 2026.05 기준",
  },
  {
    id: "inquiries",
    value: "111만+",
    label: "총 대출업체 문의",
    note: "2026.05 기준",
  },
  {
    id: "renewal",
    value: "97%",
    label: "대출나라 광고 연장률",
    note: "2026.05 기준",
  },
  {
    id: "leadership",
    value: "11년",
    label: "연속 업계 1위 지표",
    note: "방문자·등록 업체 수 · 2026.05 기준",
  },
] as const;

/** 랜딩 강점 섹션 (원티드형 2열, 이미지 좌측) */
export const ENTERPRISE_COMPARISON_SECTION = {
  headline: "왜 대출나라인가요?",
  description:
    "대출 니즈 고객에게 노출되고, 광고비 대비 상담·문의가 집중되는 구조입니다.",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  imageAlt: "광고 성과를 분석하는 대시보드",
} as const;

export const ENTERPRISE_COMPARISON_ROWS = [
  {
    item: "타깃 마케팅",
    highlight: "대출 수요 고객 중심",
  },
  {
    item: "광고비 대비 효율",
    highlight: "동일 예산 대비 상담·문의 집중",
  },
  {
    item: "업체 신뢰",
    highlight: "정식 등록 업체만 노출",
  },
] as const;

export const ENTERPRISE_PROMO_BLOCKS = [
  {
    id: "calls",
    imagePosition: "right",
    title: "콜 수로 보이는 즉각적인 반응",
    description:
      "저렴한 비용으로도 상담·문의가 이어집니다. 달라지는 콜 수로 광고 효과를 직접 체감해 보세요.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "상담 중인 비즈니스 팀",
  },
  {
    id: "since-2014",
    imagePosition: "left",
    title: "2014년, 국내 최초 대출 중개 플랫폼",
    description:
      "11년 연속 방문자 수 업계 1위 · 11년 연속 대출업체 등록 수 업계 1위. 검증된 트래픽 위에서 안정적으로 노출하세요.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "도시 비즈니스 스카이라인",
    highlights: ["방문자 수 업계 1위", "등록 업체 수 업계 1위"],
  },
] as const;

export const ENTERPRISE_GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    alt: "데이터 분석 대시보드",
    caption: "실시간 트래픽·전환 추이",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
    alt: "금융 상담",
    caption: "대출 니즈 고객 타깃",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
    alt: "협업하는 팀",
    caption: "업체·플랫폼 상생",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
    alt: "모바일 금융 서비스",
    caption: "모바일·PC 동시 노출",
  },
] as const;

/** 히어로 배경 */
export const ENTERPRISE_HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=85&auto=format&fit=crop";
