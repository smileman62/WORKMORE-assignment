import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ARTICLE_CATEGORY_LABELS } from '@/entities/article/model/constants';
import { getArticleById } from '@/entities/article/model/mock';
import { ROUTES } from '@/shared/constants/routes';
import { Badge } from '@/shared/ui/badge/Badge';
import { Button } from '@/shared/ui/button/Button';
import { AppShell } from '@/widgets/app-shell/AppShell';

export type ArticleDetailPageProps = {
  articleId: string;
};

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const article = getArticleById(articleId);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split('\n').filter(Boolean);

  return (
    <AppShell>
      <article className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </Badge>
          <time className="text-sm text-muted-foreground" dateTime={article.publishedAt}>
            {article.publishedAt}
          </time>
          {article.readMinutes && (
            <span className="text-sm text-muted-foreground">
              · 약 {article.readMinutes}분
            </span>
          )}
        </div>
        <h1 className="mt-4 text-2xl font-bold text-foreground">{article.title}</h1>
        <p className="mt-3 text-base text-muted-foreground">{article.summary}</p>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          {paragraphs.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-foreground">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" asChild>
            <Link href={ROUTES.info}>목록으로</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href={ROUTES.support}>FAQ · 1:1 문의</Link>
          </Button>
        </div>
      </article>
    </AppShell>
  );
}
