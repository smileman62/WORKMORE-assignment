import type { Article } from './types';

export const mockArticles: Article[] = [
  {
    id: 'article-notice-1',
    title: '대출나라 서비스 이용 안내 업데이트',
    summary: '상담 전 안전 확인 기능이 강화되었습니다.',
    content:
      '대출나라는 등록 업체 정보를 제공하는 플랫폼입니다. 직접 대출을 진행하지 않으며, 상담 전 정식 업체 조회와 사기 번호 검색을 권장합니다.\n\n이번 업데이트에서는 안전 확인 흐름을 더 쉽게 찾을 수 있도록 메뉴와 화면을 정리했습니다.\n\n주요 변경 사항\n· 안전센터 메뉴 구조 개선\n· 업체 상세에서 등록 확인 바로가기 추가\n· 피해 신고 접수 절차 안내 보강\n\n자세한 이용 방법은 이용 가이드에서 확인할 수 있습니다.',
    category: 'notice',
    publishedAt: '2026-05-19',
    isPopular: true,
    readMinutes: 3,
  },
  {
    id: 'article-notice-2',
    title: '개인정보 처리방침 개정 안내',
    summary: '2026년 6월 1일부터 개정된 방침이 적용됩니다.',
    content:
      '이용자 권리 보호를 위해 개인정보 처리방침 일부 조항을 개정합니다.\n\n개정 시행일: 2026년 6월 1일\n\n주요 변경 내용은 홈페이지 하단 「개인정보 처리방침」에서 확인할 수 있습니다. 변경 사항이 적용되기 전까지 기존 방침이 유지됩니다.',
    category: 'notice',
    publishedAt: '2026-05-12',
    readMinutes: 2,
  },
  {
    id: 'article-notice-3',
    title: '고객센터 운영 시간 변경 안내',
    summary: '2026년 5월 20일부터 상담 가능 시간이 조정됩니다.',
    content:
      '더 나은 상담 품질을 위해 고객센터 운영 시간을 아래와 같이 변경합니다.\n\n· 평일 09:00 ~ 18:00\n· 토·일·공휴일 휴무\n\n긴급한 피해 신고는 안전센터 피해 신고 메뉴를 이용해 주세요.',
    category: 'notice',
    publishedAt: '2026-05-08',
    readMinutes: 2,
  },
  {
    id: 'article-notice-4',
    title: '서비스 점검 안내 (5/20 02:00 ~ 05:00)',
    summary: '점검 시간 동안 일부 기능 이용이 제한됩니다.',
    content:
      '안정적인 서비스 제공을 위해 아래 시간에 시스템 점검을 진행합니다.\n\n점검 일시: 2026년 5월 20일(화) 02:00 ~ 05:00\n\n점검 중에는 업체 검색·안전 조회 기능 이용이 일시 중단될 수 있습니다. 이용에 불편을 드려 죄송합니다.',
    category: 'notice',
    publishedAt: '2026-05-05',
    readMinutes: 2,
  },
  {
    id: 'article-notice-5',
    title: '대출나라 서비스 이용약관 개정 안내',
    summary: '2026년 5월 1일부터 개정 약관이 적용됩니다.',
    content:
      '서비스 이용약관 일부 조항을 개정합니다.\n\n시행일: 2026년 5월 1일\n\n개정 내용은 홈페이지 하단 「이용약관」에서 확인할 수 있습니다. 계속 서비스를 이용하시면 개정 약관에 동의한 것으로 간주됩니다.',
    category: 'notice',
    publishedAt: '2026-04-28',
    readMinutes: 2,
  },
  {
    id: 'article-guide-1',
    title: '처음 이용하는 분을 위한 3단계 가이드',
    summary: '조건 선택 → 업체 비교 → 상담 전 확인',
    content:
      '1단계: 지역·상품·직업을 선택해 업체를 찾습니다.\n2단계: 금리·한도·상담 방식을 비교합니다.\n3단계: 정식 등록 여부와 연락처를 확인한 뒤 상담합니다.\n\n대출나라는 중개 플랫폼이므로 최종 대출 조건은 업체와 직접 확인해야 합니다.',
    category: 'guide',
    publishedAt: '2026-04-20',
    isPopular: true,
    readMinutes: 4,
  },
  {
    id: 'article-guide-2',
    title: '업체 상세 페이지 읽는 법',
    summary: '금리·한도·상환 방식을 비교하는 방법',
    content:
      '업체 상세에서는 대출 조건, 상담 연락처, 안전 확인 CTA를 한눈에 볼 수 있습니다. 광고·추천 라벨과 등록 확인 가능 여부를 함께 확인하세요.',
    category: 'guide',
    publishedAt: '2026-04-10',
    readMinutes: 3,
  },
  {
    id: 'article-tip-1',
    title: '상담 전 꼭 확인할 체크리스트',
    summary: '등록 여부, 금리, 추가 비용을 확인하세요',
    content:
      '· 금융감독원 등록 대부업체인지 확인\n· 연 20% 법정 최고금리 준수 여부 확인\n· 중도상환·수수료 조건 확인\n· 계약서·상환 스케줄 서면 확보',
    category: 'finance-tip',
    publishedAt: '2026-05-10',
    thumbnailUrl: 'https://picsum.photos/seed/article-tip-1/160/160',
    isPopular: true,
    readMinutes: 3,
  },
  {
    id: 'article-tip-2',
    title: '불법 사금융을 구별하는 방법',
    summary: '선입금·과도한 개인정보 요구에 주의',
    content:
      '대출 실행 전 수수료·보증금을 요구하거나, 공인인증서·통장을 요구하는 경우 사기일 수 있습니다. 의심되면 즉시 상담을 중단하고 1332·112에 문의하세요.',
    category: 'finance-tip',
    publishedAt: '2026-04-28',
    readMinutes: 4,
  },
  {
    id: 'article-tip-3',
    title: '대출 계약서에서 확인할 5가지',
    summary: '금리·상환일·위약금 조항을 꼼꼼히 보세요',
    content:
      '계약서에는 적용 금리, 상환 방식, 연체 시 금리, 중도상환 수수료, 해지 조건이 명시되어야 합니다. 구두 약속만으로 진행하지 마세요.',
    category: 'finance-tip',
    publishedAt: '2026-04-15',
    thumbnailUrl: 'https://picsum.photos/seed/article-tip-3/160/160',
    readMinutes: 3,
  },
  {
    id: 'article-tip-4',
    title: '비대면 상담 시 연락처 확인 팁',
    summary: '낯선 번호·링크는 바로 열지 마세요',
    content:
      '업체 공식 번호와 상담 연락처가 일치하는지 확인하세요. 문자로 받은 앱 설치·계좌 이체 요청은 사기일 가능성이 높습니다.',
    category: 'finance-tip',
    publishedAt: '2026-03-28',
    readMinutes: 2,
  },
  {
    id: 'article-news-1',
    title: '등록 대부업체 금리 공시 제도, 상담 전 꼭 확인하세요',
    summary: '금융당국, 투명한 금리 공시를 강조',
    content:
      '등록 대부업체는 법정 최고금리 범위 내에서 금리를 산정해야 합니다. 이용자는 상담 시 연체 시 적용 금리와 추가 비용을 반드시 확인해야 합니다.',
    category: 'finance-news',
    publishedAt: '2026-05-18',
    thumbnailUrl: 'https://picsum.photos/seed/article-news-1/160/160',
    isPopular: true,
    isNew: true,
    readMinutes: 3,
    viewCount: 1284,
    likeCount: 42,
  },
  {
    id: 'article-news-2',
    title: '비대면 대출 상담이 늘면서 확인해야 할 연락처 체크리스트',
    summary: '모바일·문자 상담 비중 확대',
    content:
      '비대면 상담이 늘면서 연락처·업체 정보 확인의 중요성도 커지고 있습니다. 낯선 번호로 받은 링크·앱 설치 요청은 주의하세요.',
    category: 'finance-news',
    publishedAt: '2026-05-12',
    thumbnailUrl: 'https://picsum.photos/seed/article-news-2/160/160',
    readMinutes: 3,
    viewCount: 956,
    likeCount: 31,
  },
  {
    id: 'article-news-3',
    title: '대출 상담 전 금융감독원 등록 여부 조회, 이렇게 하세요',
    summary: '정식 등록 업체 확인 절차 요약',
    content:
      '금융감독원 홈페이지에서 대부업 등록 여부를 조회할 수 있습니다. 상호명·등록번호를 대조하고, 미등록 업체는 즉시 상담을 중단하세요.',
    category: 'finance-news',
    publishedAt: '2026-05-05',
    readMinutes: 4,
    viewCount: 2103,
    likeCount: 67,
  },
  {
    id: 'article-news-4',
    title: '소액대출 이용자, 상환 계획 세우는 방법',
    summary: '월 상환액·비상 자금을 함께 점검하세요',
    content:
      '소액대출이라도 상환 일정을 미리 잡아 두면 연체 위험을 줄일 수 있습니다. 가계 수입 대비 상환 비중이 과하지 않은지 확인하세요.',
    category: 'finance-news',
    publishedAt: '2026-04-22',
    thumbnailUrl: 'https://picsum.photos/seed/article-news-4/160/160',
    readMinutes: 3,
  },
  {
    id: 'article-qna-1',
    title: '대출나라에서 직접 대출이 가능한가요?',
    summary: '플랫폼 역할과 한계를 설명합니다',
    content:
      '아니요. 대출나라는 등록 업체 정보를 제공하고 상담 연결을 돕는 플랫폼입니다. 대출 실행·승인은 각 업체와 직접 진행됩니다.',
    category: 'qna',
    publishedAt: '2026-05-05',
    readMinutes: 2,
  },
  {
    id: 'article-qna-2',
    title: '광고 업체와 일반 업체의 차이는?',
    summary: '광고 라벨의 의미를 안내합니다',
    content:
      '광고 업체는 노출·추천을 위해 비용을 지불한 업체입니다. 광고 여부와 관계없이 상담 전 등록 여부와 조건을 직접 확인해야 합니다.',
    category: 'qna',
    publishedAt: '2026-04-18',
    readMinutes: 2,
  },
  {
    id: 'article-industry-1',
    title: '대부업 등록 현황과 이용자 보호',
    summary: '등록 업체 기준과 신고 방법',
    content:
      '대부업은 금융감독원에 등록된 업체만 영업할 수 있습니다. 미등록 업체와 거래하지 않도록 주의하고, 의심 업체는 1332로 신고할 수 있습니다.',
    category: 'loan-industry-news',
    publishedAt: '2026-05-12',
    thumbnailUrl: 'https://picsum.photos/seed/article-industry-1/160/160',
    isPopular: true,
    readMinutes: 4,
  },
  {
    id: 'article-industry-2',
    title: '대부업 광고 규정 개요',
    summary: '과장 광고·허위 정보 신고 안내',
    content:
      '대부업 광고는 금리·조건을 사실에 맞게 표시해야 합니다. 허위·과장 광고는 금융감독원에 신고할 수 있습니다.',
    category: 'loan-industry-news',
    publishedAt: '2026-04-05',
    readMinutes: 3,
  },
  {
    id: 'article-industry-3',
    title: '[보도] 불법 사금융 단속 강화…이용자 피해 예방 총력',
    summary: '관계 기관, 선입금형 사기 수법 주의 당부',
    content:
      '최근 보도에 따르면 불법 사금융 단속이 강화되고 있습니다. 대출 실행 전 선입금을 요구하는 업체는 사기일 가능성이 높으니 주의가 필요합니다.',
    category: 'loan-industry-news',
    publishedAt: '2026-05-01',
    thumbnailUrl: 'https://picsum.photos/seed/article-industry-3/160/160',
    readMinutes: 3,
  },
  {
    id: 'article-industry-4',
    title: '[언론] 비대면 금융 상담 증가, 확인 절차도 함께 강화',
    summary: '전문가, 등록 여부·연락처 대조 권고',
    content:
      '비대면 상담이 늘면서 이용자 스스로 업체 정보를 확인하는 절차가 더 중요해지고 있다는 보도가 이어지고 있습니다.',
    category: 'loan-industry-news',
    publishedAt: '2026-04-18',
    readMinutes: 2,
  },
];

export function getArticleById(id: string): Article | undefined {
  return mockArticles.find((a) => a.id === id);
}
