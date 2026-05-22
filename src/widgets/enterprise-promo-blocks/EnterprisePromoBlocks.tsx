import Image from 'next/image';

import { ENTERPRISE_PROMO_BLOCKS } from '@/entities/enterprise/model/content';
import { cn } from '@/shared/lib/cn';

export function EnterprisePromoBlocks() {
  return (
    <section className="bg-surface">
      {ENTERPRISE_PROMO_BLOCKS.map((block, index) => {
        const isReversed = block.imagePosition === 'right';

        return (
          <article
            key={block.id}
            className={cn(
              'border-b border-border last:border-0',
              index > 0 && 'border-t border-border',
            )}
          >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 sm:items-center sm:gap-12 sm:py-20">
              <div
                className={cn(
                  'relative aspect-4/3 overflow-hidden rounded-2xl sm:aspect-16/10',
                  isReversed && 'sm:order-2',
                )}
              >
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className={cn(isReversed && 'sm:order-1')}>
                <span className="inline-block h-1 w-10 rounded-full bg-primary" />
                <h2 className="mt-4 text-xl font-bold text-foreground md:text-2xl">
                  {block.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {block.description}
                </p>
                {'highlights' in block && block.highlights ? (
                  <ul className="mt-6 flex flex-col gap-2">
                    {block.highlights.map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        11년 연속 {text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
