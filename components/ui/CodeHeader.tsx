import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SyntaxToken {
  text: string;
  color: string;
}

interface CodeHeaderProps {
  children?: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  syntax?: SyntaxToken[];
  className?: string;
}

export default function CodeHeader({
  children,
  level = 'h1',
  syntax = [],
  className = '',
}: CodeHeaderProps) {
  const Component = level as ElementType;

  const baseClasses = {
    h1: 'text-3xl md:text-4xl font-bold mb-4',
    h2: 'text-xl font-semibold mb-3',
    h3: 'text-lg font-semibold mb-2',
  };

  return (
    <Component
      className={cn(
        baseClasses[level],
        'text-[var(--vscode-text-primary)] font-mono',
        className,
      )}
    >
      {syntax.length > 0
        ? syntax.map((token, index) => (
            <span key={index} className={`text-[var(--vscode-${token.color})]`}>
              {token.text}
            </span>
          ))
        : children}
    </Component>
  );
}
