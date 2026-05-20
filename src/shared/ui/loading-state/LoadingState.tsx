import { Loader2 } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

export type LoadingStateProps = {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullScreen?: boolean;
};

const sizeMap = {
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

export function LoadingState({
  message = '불러오는 중이에요',
  size = 'md',
  className,
  fullScreen = false,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center gap-3',
        fullScreen && 'min-h-[50vh]',
        className,
      )}
    >
      <Loader2
        className={cn('animate-spin text-primary', sizeMap[size])}
        aria-hidden
      />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
