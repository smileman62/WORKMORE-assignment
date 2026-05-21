import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

const hideNumberSpinners =
  '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-lg border border-border bg-background px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          type === 'number' && hideNumberSpinners,
          error && 'border-danger focus-visible:ring-danger',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
