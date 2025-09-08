import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TechTagProps {
  children: ReactNode;
  variant?: 'default' | 'hash' | 'hover';
  size?: 'sm' | 'md';
}

export default function TechTag({
  children,
  variant = 'default',
  size = 'sm',
}: TechTagProps) {
  const baseClasses =
    'border border-[var(--vscode-border-light)] rounded font-mono';

  const variantClasses = {
    default:
      'px-3 py-1 bg-[var(--vscode-bg-tertiary)] text-[var(--vscode-teal)]',
    hash: 'px-2 py-1 bg-[var(--vscode-bg-tertiary)] text-[var(--vscode-text-secondary)] hover:border-[var(--vscode-teal)] transition-colors',
    hover:
      'px-3 py-1 bg-[var(--vscode-bg-tertiary)] text-[var(--vscode-text-primary)] hover:border-[var(--vscode-teal)] transition-colors',
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
  };

  return (
    <span
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size])}
    >
      {variant === 'hash' && '#'}
      {children}
    </span>
  );
}
