import { Megaphone } from 'lucide-react';

import { AD_PRODUCTS } from '@/entities/business/model/constants';
import { Badge } from '@/shared/ui/badge/Badge';
import { Card, CardContent } from '@/shared/ui/card/Card';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';

export function BusinessAdProductsSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="광고 상품 안내"
          description="목적에 맞는 노출 패키지를 선택할 수 있습니다."
        />
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {AD_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Megaphone className="h-5 w-5 text-foreground" aria-hidden />
                  </div>
                  <Badge variant="primary" className="w-fit">
                    {product.highlight}
                  </Badge>
                  <p className="font-semibold text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
