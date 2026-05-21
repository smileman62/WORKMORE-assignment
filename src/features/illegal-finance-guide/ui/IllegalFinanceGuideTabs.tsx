'use client';

import Link from 'next/link';
import { AlertCircle, ClipboardList, FileText, Phone } from 'lucide-react';
import type { ComponentType } from 'react';

import { ILLEGAL_FINANCE_GUIDE_TABS } from '@/entities/safety/model/illegalFinanceGuide';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/tabs/Tabs';

function GuideSection({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: string[];
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="h-4 w-4 text-primary" aria-hidden />
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg bg-muted/60 px-3 py-2.5 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function IllegalFinanceGuideTabs() {
  return (
    <Tabs defaultValue={ILLEGAL_FINANCE_GUIDE_TABS[0].id} className="w-full">
      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-muted p-1 sm:flex-nowrap sm:overflow-x-auto">
        {ILLEGAL_FINANCE_GUIDE_TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="min-h-10 shrink-0 px-3 text-xs sm:text-sm"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {ILLEGAL_FINANCE_GUIDE_TABS.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-6">
          <div className="flex flex-col gap-8 rounded-xl border border-border bg-background p-5 md:p-6">
            <GuideSection
              title="이런 경우를 조심하세요"
              icon={AlertCircle}
              items={tab.cautions}
            />
            <GuideSection
              title="바로 해야 할 행동"
              icon={ClipboardList}
              items={tab.immediateActions}
            />
            <GuideSection
              title="보관해야 할 증거"
              icon={FileText}
              items={tab.evidenceToKeep}
            />

            <section className="flex flex-col gap-3">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                신고할 곳
              </h3>
              <ul className="flex flex-col gap-2">
                {tab.reportTo.map((agency) => (
                  <li
                    key={agency.name}
                    className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 text-sm"
                  >
                    <span className="font-medium text-foreground">
                      {agency.name}
                    </span>
                    <span className="text-muted-foreground">{agency.contact}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row">
              <Button variant="primary" fullWidth asChild>
                <Link href={ROUTES.safetyReport}>피해신고하기</Link>
              </Button>
              <Button variant="outline" fullWidth asChild>
                <Link href={ROUTES.safetyFraudNumber}>사기번호 조회하기</Link>
              </Button>
              <Button variant="outline" fullWidth asChild>
                <Link href={ROUTES.safetyVerifyCompany}>정식업체 확인하기</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
