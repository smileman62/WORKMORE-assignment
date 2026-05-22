import { SafetyMobileNav } from "@/widgets/safety-layout/ui/SafetyMobileNav";
import { SafetySidebar } from "@/widgets/safety-layout/ui/SafetySidebar";
import { AppShell } from "@/widgets/app-shell/AppShell";

export type SafetyLayoutProps = {
  children: React.ReactNode;
};

export function SafetyLayout({ children }: SafetyLayoutProps) {
  return (
    <AppShell>
      <div className="bg-white px-4 py-2 lg:py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:gap-10">
          <SafetySidebar />
          <div className="min-w-0 flex-1">
            <div className="mx-auto mt-4 w-full max-w-3xl">
              <SafetyMobileNav />
              <div className="my-12 lg:mt-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
