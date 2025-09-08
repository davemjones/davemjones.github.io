import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BulletListProps {
  items: (string | ReactNode)[];
  bulletStyle?: 'arrow' | 'check' | 'dot' | 'custom';
  customBullet?: ReactNode;
  className?: string;
  itemClassName?: string;
}

export default function BulletList({
  items,
  bulletStyle = 'arrow',
  customBullet,
  className = '',
  itemClassName = '',
}: BulletListProps) {
  const bulletMap = {
    arrow: <span className="text-[var(--vscode-teal)] mr-2">→</span>,
    check: <span className="text-[var(--vscode-green)] mr-2">✓</span>,
    dot: <span className="text-[var(--vscode-purple)] mr-2">●</span>,
    custom: customBullet,
  };

  return (
    <ul
      className={cn('space-y-2 text-[var(--vscode-text-primary)]', className)}
    >
      {items.map((item, index) => (
        <li key={index} className={cn('flex items-start', itemClassName)}>
          {bulletMap[bulletStyle]}
          {typeof item === 'string' ? <span>{item}</span> : item}
        </li>
      ))}
    </ul>
  );
}
