import { FaqListContent } from '@/features/contact-support/ui/FaqListContent';
import { SupportLayout } from '@/widgets/support-layout/SupportLayout';

export function SupportFaqPage() {
  return (
    <SupportLayout>
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        자주 묻는 질문
      </h1>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">
        궁금한 내용을 검색하거나 카테고리별 FAQ를 확인해 보세요.
      </p>
      <div className="mt-6 md:mt-8">
        <FaqListContent />
      </div>
    </SupportLayout>
  );
}
