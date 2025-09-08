import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export default function ActionLink({
  href,
  children,
  external = false,
  className = '',
}: ActionLinkProps) {
  const baseClasses =
    'text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] transition-colors text-sm font-mono';

  const linkProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a href={href} className={cn(baseClasses, className)} {...linkProps}>
      {children} →
    </a>
  );
}
