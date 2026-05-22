import { SupportMobileNav } from '@/widgets/support-layout/ui/SupportMobileNav';
import { SupportSidebar } from '@/widgets/support-layout/ui/SupportSidebar';
import { AppShell } from '@/widgets/app-shell/AppShell';

export type SupportLayoutProps = {
  children: React.ReactNode;
};

export function SupportLayout({ children }: SupportLayoutProps) {
  return (
    <AppShell>
      <div className="bg-white px-4 py-2 lg:py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:gap-10">
          <SupportSidebar />
          <div className="min-w-0 flex-1">
            <div className="mx-auto mt-4 w-full max-w-3xl">
              <SupportMobileNav />
              <div className="my-8 lg:mt-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
