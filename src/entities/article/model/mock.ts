import type { Article } from './types';

export const mockArticles: Article[] = [
  {
    id: 'article-notice-1',
    title: '대출나라 서비스 이용 안내 업데이트',
    summary: '상담 전 안전 확인 기능이 강화되었습니다.',
    content:
      '대출나라는 등록 업체 정보를 제공하는 플랫폼입니다. 직접 대출을 진행하지 않으며, 상담 전 정식 업체 조회와 사기 번호 검색을 권장합니다.\n\n주요 변경 사항:\n· 안전센터 메뉴 구조 개선\n· 업체 상세에서 등록 확인 바로가기 추가\n· 피해 신고 접수 절차 안내 보강',
    category: 'notice',
    publishedAt: '2026-05-15',
    isPopular: true,
    readMinutes: 3,
  },
  {
    id: 'article-notice-2',
    title: '개인정보 처리방침 개정 안내',
    summary: '2026년 6월 1일부터 개정된 방침이 적용됩니다.',
    content:
      '이용자 권리 보호를 위해 개인정보 처리방침 일부 조항을 개정합니다. 개정 내용은 홈페이지 하단에서 확인할 수 있습니다.',
    category: 'notice',
    publishedAt: '2026-05-01',
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
    id: 'article-news-1',
    title: '등록 대부업체 금리 공시 제도 안내',
    summary: '금융당국, 투명한 금리 공시를 강조',
    content:
      '등록 대부업체는 법정 최고금리 범위 내에서 금리를 산정해야 합니다. 이용자는 상담 시 연체 시 적용 금리와 추가 비용을 반드시 확인해야 합니다.',
    category: 'finance-news',
    publishedAt: '2026-05-08',
    isPopular: true,
    readMinutes: 3,
  },
  {
    id: 'article-news-2',
    title: '비대면 대출 상담 이용 증가 추세',
    summary: '모바일·문자 상담 비중 확대',
    content:
      '비대면 상담이 늘면서 연락처·업체 정보 확인의 중요성도 커지고 있습니다. 낯선 번호로 받은 링크·앱 설치 요청은 주의하세요.',
    category: 'finance-news',
    publishedAt: '2026-04-22',
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
];

export function getArticleById(id: string): Article | undefined {
  return mockArticles.find((a) => a.id === id);
}
