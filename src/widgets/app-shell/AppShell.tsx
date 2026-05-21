import { AppFooter } from '@/widgets/app-footer/AppFooter';
import { AppHeader } from '@/widgets/app-header/AppHeader';
import { MobileBottomNav } from '@/widgets/mobile-bottom-nav/MobileBottomNav';

export type AppShellProps = {
  children: React.ReactNode;
  hideBottomNav?: boolean;
};

export function AppShell({ children, hideBottomNav = false }: AppShellProps) {
  return (
    <>
      <AppHeader />
      <main
        className={
          hideBottomNav
            ? 'flex-1'
            : 'flex-1 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0'
        }
      >
        {children}
      </main>
      <AppFooter />
      {!hideBottomNav && <MobileBottomNav />}
    </>
  );
}
