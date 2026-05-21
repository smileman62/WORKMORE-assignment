export type FaqAudience = 'customer' | 'company';

export type FaqItem = {
  id: string;
  audience: FaqAudience;
  question: string;
  answer: string;
};

export const mockFaqs: FaqItem[] = [
  {
    id: 'faq-c-1',
    audience: 'customer',
    question: '대출나라에서 대출을 받을 수 있나요?',
    answer:
      '대출나라는 직접 대출하지 않습니다. 등록 업체 정보를 확인한 뒤 각 업체와 상담·계약을 진행합니다.',
  },
  {
    id: 'faq-c-2',
    audience: 'customer',
    question: '업체 정보는 어떻게 확인하나요?',
    answer:
      '업체 상세에서 금리·한도·연락처를 확인하고, 정식 업체 조회·사기 번호 검색으로 추가 확인을 권장합니다.',
  },
  {
    id: 'faq-c-3',
    audience: 'customer',
    question: '광고 업체는 믿을 수 있나요?',
    answer:
      '광고는 노출 방식일 뿐 등록·신뢰를 보장하지 않습니다. 상담 전 등록 여부와 조건을 반드시 직접 확인하세요.',
  },
  {
    id: 'faq-c-4',
    audience: 'customer',
    question: '피해를 당했을 때 어떻게 하나요?',
    answer:
      '안전센터에서 피해 신고를 접수하고, 금감원 1332·경찰 112 신고를 함께 진행해 주세요.',
  },
  {
    id: 'faq-c-5',
    audience: 'customer',
    question: '검색 결과가 없을 때는?',
    answer:
      '지역·상품 조건을 넓혀 다시 검색하거나, 1:1 문의로 도움을 요청해 주세요.',
  },
  {
    id: 'faq-b-1',
    audience: 'company',
    question: '업체 등록·노출은 어떻게 신청하나요?',
    answer:
      '사업자 페이지에서 광고 상품과 등록 절차를 확인할 수 있습니다. (상세 기능은 준비 중)',
  },
  {
    id: 'faq-b-2',
    audience: 'company',
    question: '업체 정보 수정은 어디서 하나요?',
    answer:
      '사업자 회원 로그인 후 대시보드에서 수정할 수 있습니다. 로그인 전에는 1:1 문의로 요청해 주세요.',
  },
  {
    id: 'faq-b-3',
    audience: 'company',
    question: '광고 상품 종류가 궁금해요',
    answer:
      '지역·상품별 노출, 추천 영역 등 패키지가 있습니다. 사업자 담당자에게 문의해 주세요.',
  },
  {
    id: 'faq-b-4',
    audience: 'company',
    question: '고객 문의는 어디로 오나요?',
    answer:
      '플랫폼을 통한 상담 연결은 업체 연락처로 직접 진행됩니다. 대출나라는 중개 역할만 수행합니다.',
  },
];
