import { Check } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

export type StepperStep = {
  id: number;
  label: string;
};

export type StepperProps = {
  steps: StepperStep[];
  currentStep: number;
  className?: string;
};

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <nav aria-label="진행 단계" className={cn('w-full', className)}>
      <ol className="flex items-center justify-between gap-1">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.id}
              className={cn('flex flex-1 items-center', isLast && 'flex-none')}
            >
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors',
                    isCompleted && 'bg-primary text-primary-foreground',
                    isCurrent &&
                      'bg-primary-muted text-primary ring-2 ring-primary',
                    !isCompleted &&
                      !isCurrent &&
                      'bg-muted text-muted-foreground',
                  )}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" aria-hidden />
                  ) : (
                    step.id
                  )}
                </span>
                <span
                  className={cn(
                    'hidden max-w-[4.5rem] text-center text-xs font-medium sm:block',
                    isCurrent ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className={cn(
                    'mx-1 h-0.5 flex-1 rounded-full',
                    isCompleted ? 'bg-primary' : 'bg-border',
                  )}
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-center text-sm font-medium text-foreground sm:hidden">
        {steps.find((s) => s.id === currentStep)?.label}
      </p>
    </nav>
  );
}
