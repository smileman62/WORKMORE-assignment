export function formatWon(amount: number): string {
  if (!Number.isFinite(amount)) {
    return '0원';
  }
  return `${Math.round(amount).toLocaleString('ko-KR')}원`;
}
