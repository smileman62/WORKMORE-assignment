export const AD_PRODUCTS = [
  {
    id: 'regional',
    name: '지역 노출',
    description: '선택 지역 검색·목록 상단에 업체를 노출합니다.',
    highlight: '지역 타겟',
  },
  {
    id: 'recommended',
    name: '추천 영역',
    description: '홈·결과 목록 추천 슬롯에 우선 노출됩니다.',
    highlight: '인지도 강화',
  },
  {
    id: 'search-priority',
    name: '검색 우선',
    description: '맞춤 검색 결과에서 상위 노출을 지원합니다.',
    highlight: '전환 집중',
  },
] as const;

export const AD_PLACEMENTS = [
  { area: '홈', position: '추천 업체 미리보기', note: '신뢰 라벨과 함께 노출' },
  { area: '검색 결과', position: '목록 상단·추천 슬롯', note: '조건 일치 시 우선' },
  { area: '업체 상세', position: '관련 업체 영역', note: '유료 파트너 연동 시' },
  { area: '지역·상품 탐색', position: '필터 결과 상단', note: '지역/상품 패키지' },
] as const;

export const AD_REGISTRATION_STEPS = [
  { title: '회원가입', description: '사업자 계정을 생성합니다.' },
  { title: '대부등록증 제출', description: '등록 대부업 증빙을 확인합니다.' },
  { title: '광고 상품 선택', description: '노출 패키지·기간을 선택합니다.' },
  { title: '광고비 입금', description: '계약 금액을 입금·확인합니다.' },
  { title: '광고 노출', description: '심사 후 지정 영역에 노출됩니다.' },
] as const;

export const SIGNUP_FLOW_STEPS = [
  { title: '약관 동의', description: '서비스·개인정보 약관에 동의합니다.' },
  { title: '업체 정보 입력', description: '상호, 연락처, 지역·상품 정보를 등록합니다.' },
  { title: '가입 완료', description: '심사 후 대시보드 이용이 가능합니다.' },
] as const;

export const AD_METRICS = [
  { label: '월간 방문', value: '120만+', sub: '모바일·PC 합산' },
  { label: '업체 조회', value: '45만+', sub: '월간 상세 조회' },
  { label: '상담 연결', value: '18만+', sub: '전화·문자 클릭' },
  { label: '재방문율', value: '38%', sub: '30일 기준' },
] as const;

export const BUSINESS_FAQS = [
  {
    question: '광고 노출은 언제부터 가능한가요?',
    answer:
      '회원가입·서류 제출·입금 확인 후 영업일 2~3일 내 심사·노출이 시작됩니다. 상황에 따라 달라질 수 있습니다.',
  },
  {
    question: '미등록 업체도 광고할 수 있나요?',
    answer:
      '아니요. 금융감독원 등록 대부업체 확인 후에만 광고 집행이 가능합니다.',
  },
  {
    question: '광고비 정산 방식은 어떻게 되나요?',
    answer:
      '선택한 패키지에 따라 월 정액·기간제 상품이 제공됩니다. 상세는 광고 문의 시 안내드립니다.',
  },
  {
    question: '노출 위치를 지정할 수 있나요?',
    answer:
      '패키지별로 가능한 영역이 정해져 있습니다. 지역·검색·추천 영역 조합을 상담해 드립니다.',
  },
] as const;
