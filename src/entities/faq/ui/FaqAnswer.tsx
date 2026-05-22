import { cn } from '@/shared/lib/cn';

export type FaqAnswerProps = {
  text: string;
  className?: string;
};

function isBulletLine(line: string): boolean {
  const t = line.trim();
  return t.startsWith('·') || t.startsWith('- ') || t.startsWith('* ');
}

function isNumberedLine(line: string): boolean {
  return /^\d+\.\s/.test(line.trim());
}

export function FaqAnswer({ text, className }: FaqAnswerProps) {
  const blocks = text.split(/\n\n+/).filter((b) => b.trim());

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {blocks.map((block) => {
        const lines = block.split('\n').filter((l) => l.trim());

        if (lines.length > 1 && lines.every(isBulletLine)) {
          return (
            <ul
              key={block}
              className="flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-foreground"
            >
              {lines.map((line) => (
                <li key={line}>{line.trim().replace(/^[·\-*]\s?/, '')}</li>
              ))}
            </ul>
          );
        }

        if (lines.length > 1 && lines.every(isNumberedLine)) {
          return (
            <ol
              key={block}
              className="flex list-decimal flex-col gap-2 pl-5 text-base leading-relaxed text-foreground"
            >
              {lines.map((line) => (
                <li key={line}>{line.trim().replace(/^\d+\.\s/, '')}</li>
              ))}
            </ol>
          );
        }

        return (
          <div key={block} className="flex flex-col gap-2">
            {lines.map((line) => {
              const trimmed = line.trim();
              if (isBulletLine(trimmed)) {
                return (
                  <p
                    key={line}
                    className="pl-4 text-base leading-relaxed text-foreground before:mr-2 before:content-['·']"
                  >
                    {trimmed.replace(/^[·\-*]\s?/, '')}
                  </p>
                );
              }
              if (isNumberedLine(trimmed)) {
                return (
                  <p
                    key={line}
                    className="text-base leading-relaxed text-foreground"
                  >
                    {trimmed}
                  </p>
                );
              }
              return (
                <p
                  key={line}
                  className="text-base leading-relaxed text-foreground"
                >
                  {trimmed}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
