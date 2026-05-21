import { cn } from '@/shared/lib/cn';

export type ProcessStep = {
  title: string;
  description?: string;
};

export type ProcessStepsProps = {
  steps: readonly ProcessStep[];
  className?: string;
  variant?: 'vertical' | 'horizontal';
};

export function ProcessSteps({
  steps,
  className,
  variant = 'vertical',
}: ProcessStepsProps) {
  if (variant === 'horizontal') {
    return (
      <ol
        className={cn(
          'grid gap-4 sm:grid-cols-3',
          className,
        )}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-center rounded-xl border border-border bg-background p-4 text-center"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-muted text-sm font-semibold text-primary">
              {index + 1}
            </span>
            <p className="mt-3 text-sm font-semibold text-foreground">{step.title}</p>
            {step.description && (
              <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
            )}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn('flex flex-col gap-4', className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-muted text-sm font-semibold text-primary"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="flex flex-col gap-0.5 pt-0.5">
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            {step.description && (
              <p className="text-sm text-muted-foreground">{step.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
