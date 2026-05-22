import { EnterpriseHeader } from '@/widgets/enterprise-header/EnterpriseHeader';

export type EnterpriseShellProps = {
  children: React.ReactNode;
};

/** 일반 고객용 AppShell과 분리된 업체용 레이아웃 */
export function EnterpriseShell({ children }: EnterpriseShellProps) {
  return (
    <>
      <EnterpriseHeader />
      <main className="flex-1 bg-white">{children}</main>
    </>
  );
}
