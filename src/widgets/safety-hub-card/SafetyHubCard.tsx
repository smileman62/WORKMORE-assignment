import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/Button';
import { Card, CardContent } from '@/shared/ui/card/Card';

export type SafetyHubCardProps = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: LucideIcon;
  variant?: 'default' | 'emphasis';
  className?: string;
};

export function SafetyHubCard({
  title,
  description,
  href,
  actionLabel,
  icon: Icon,
  variant = 'default',
  className,
}: SafetyHubCardProps) {
  return (
    <Card
      className={cn(
        variant === 'emphasis' && 'border-primary/20 bg-primary-muted/30',
        className,
      )}
    >
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
              variant === 'emphasis' ? 'bg-background' : 'bg-muted',
            )}
          >
            <Icon
              className={cn(
                'h-5 w-5',
                variant === 'emphasis' ? 'text-primary' : 'text-foreground',
              )}
              aria-hidden
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link href={href}>{actionLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
