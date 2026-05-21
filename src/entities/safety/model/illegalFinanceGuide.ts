export type IllegalFinanceGuideTab = {
  id: string;
  label: string;
  cautions: string[];
  immediateActions: string[];
  evidenceToKeep: string[];
  reportTo: { name: string; contact: string }[];
};

export const ILLEGAL_FINANCE_GUIDE_TABS: IllegalFinanceGuideTab[] = [
  {
    id: 'high-interest',
    label: '고금리',
    cautions: [
      '법정 최고금리를 크게 넘는 이자를 요구하는 경우',
      '매일·매주 이자만 갚으라며 원금 상환을 미루는 경우',
      '계약서 없이 구두로만 조건을 정하는 경우',
    ],
    immediateActions: [
      '추가 입금·선이자 요구에는 응하지 마세요.',
      '통화·문자·계약서를 캡처해 보관하세요.',
      '금감원·경찰에 상담할지 판단해 보세요.',
    ],
    evidenceToKeep: [
      '대출 계약서·차용증',
      '이자·상환 관련 문자·카톡',
      '송금·입금 내역',
      '통화 녹음(법적 허용 범위 내)',
    ],
    reportTo: [
      { name: '금융감독원', contact: '1332' },
      { name: '경찰청', contact: '112' },
    ],
  },
  {
    id: 'illegal-collection',
    label: '불법채권추심',
    cautions: [
      '가족·직장·지인에게 연락하겠다고 협박하는 경우',
      '새벽·반복 전화로 생활을 방해하는 경우',
      '폭언·욕설·모욕적 메시지를 보내는 경우',
    ],
    immediateActions: [
      '협박 통화·문자는 끊고 기록만 남기세요.',
      '직장·가족에게 상황을 짧게 공유해 대비하세요.',
      '법적 조치가 필요하면 전문가 상담을 고려하세요.',
    ],
    evidenceToKeep: [
      '협박·욕설 문자·녹음',
      '발신 번호·통화 시간 목록',
      '제3자에게 보낸 메시지 캡처',
    ],
    reportTo: [
      { name: '경찰청', contact: '112' },
      { name: '금융감독원', contact: '1332' },
    ],
  },
  {
    id: 'broker-fee',
    label: '불법대출중개수수료',
    cautions: [
      '대출 실행 전 선수수료·보증금을 요구하는 경우',
      '공식 등록 없이 중개만 해주겠다고 하는 경우',
      '개인 계좌로 수수료 입금을 요구하는 경우',
    ],
    immediateActions: [
      '이미 송금했다면 계좌·시간·금액을 기록하세요.',
      '추가 송금 요구는 중단하세요.',
      '정식 등록 업체 여부를 다시 확인하세요.',
    ],
    evidenceToKeep: [
      '수수료 입금 영수증·이체 내역',
      '중개인 연락처·명함·광고',
      '약속한 대출 조건 메시지',
    ],
    reportTo: [
      { name: '금융감독원', contact: '1332' },
      { name: '경찰청', contact: '112' },
    ],
  },
  {
    id: 'loan-fraud',
    label: '대출사기',
    cautions: [
      '대출 승인 전 등록비·보증보험료를 요구하는 경우',
      '공인인증서·OTP·카드 정보를 요구하는 경우',
      '명의 대여·통장 대여를 권유하는 경우',
    ],
    immediateActions: [
      '개인정보·계좌 정보 제공을 중단하세요.',
      '이미 제공했다면 금융사·경찰에 즉시 알리세요.',
      '대출나라에서 업체 등록 여부를 확인하세요.',
    ],
    evidenceToKeep: [
      '가짜 승인서·계약서',
      '입금 요청 메시지',
      '상담 앱·웹사이트 주소',
    ],
    reportTo: [
      { name: '경찰청', contact: '112' },
      { name: '금융감독원', contact: '1332' },
    ],
  },
  {
    id: 'phishing',
    label: '피싱사기',
    cautions: [
      '금융사·공공기관을 사칭한 링크·앱 설치 유도',
      '긴급 이체·인증 요청 문자',
      '카카오톡·문자의 짧은 URL 클릭 유도',
    ],
    immediateActions: [
      '링크 클릭·앱 설치를 멈추세요.',
      '비밀번호·인증번호를 변경하세요.',
      '의심 계좌로 이체했다면 은행에 즉시 연락하세요.',
    ],
    evidenceToKeep: [
      '피싱 문자·메일 전체',
      '가짜 사이트 URL·화면 캡처',
      '이체 내역',
    ],
    reportTo: [
      { name: '경찰청', contact: '112' },
      { name: '금융감독원', contact: '1332' },
    ],
  },
];
