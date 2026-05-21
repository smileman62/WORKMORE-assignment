export type GuideSlideCategory = 'safety' | 'service';

export type GuideSlide = {
  id: string;
  category: GuideSlideCategory;
  /** 카테고리 내 번호 (안전 01~04, 서비스 01~02) */
  index: number;
  variant:
    | 'intro'
    | 'fss'
    | 'contact'
    | 'privacy'
    | 'fee'
    | 'platform';
};

export const GUIDE_SLIDES: GuideSlide[] = [
  { id: 'service-01', category: 'service', index: 1, variant: 'intro' },
  { id: 'safety-01', category: 'safety', index: 1, variant: 'fss' },
  { id: 'safety-02', category: 'safety', index: 2, variant: 'contact' },
  { id: 'safety-03', category: 'safety', index: 3, variant: 'privacy' },
  { id: 'safety-04', category: 'safety', index: 4, variant: 'fee' },
  { id: 'service-02', category: 'service', index: 2, variant: 'platform' },
];

export function getGuideSlideLabel(slide: GuideSlide): string {
  const num = String(slide.index).padStart(2, '0');
  return slide.category === 'safety'
    ? `안전 확인 팁 ${num}`
    : `서비스 안내 ${num}`;
}
