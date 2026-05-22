import { Megaphone } from 'lucide-react';

import { AD_PRODUCTS } from '@/entities/business/model/constants';
import { Badge } from '@/shared/ui/badge/Badge';
import { Card, CardContent } from '@/shared/ui/card/Card';

export function EnterpriseAdProductsSection() {
  return (
    <section className="px-4 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          광고 상품 안내
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          목적에 맞는 노출 패키지를 선택할 수 있습니다.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AD_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Card className="h-full border-border transition-shadow hover:shadow-sm">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted">
                    <Megaphone
                      className="h-5 w-5 text-primary"
                      aria-hidden
                    />
                  </div>
                  <Badge variant="primary" className="w-fit">
                    {product.highlight}
                  </Badge>
                  <p className="font-semibold text-foreground">
                    {product.name}
                  </p>
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
