import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function BaseCard({
  children,
  className = '',
  hover = true,
}: BaseCardProps) {
  return (
    <div
      className={cn(
        'bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6',
        hover && 'hover:border-[var(--vscode-blue)] transition-colors',
        className,
      )}
    >
      {children}
    </div>
  );
}
