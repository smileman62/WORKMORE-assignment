/** ISO 날짜(2026-05-18)를 짧은 표기(26.05.18)로 변환 */
export function formatArticleDate(isoDate: string): string {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return isoDate;
  const [, year, month, day] = match;
  return `${year.slice(2)}.${month}.${day}`;
}
