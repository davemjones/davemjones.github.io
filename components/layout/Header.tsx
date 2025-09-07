'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [currentPath, setCurrentPath] = useState('~');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setCurrentPath('~/about');
    } else {
      setCurrentPath(`~${path}`);
    }
  }, []);

  return (
    <header className="border-b border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-primary)] sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 md:h-[72px] flex items-center">
        <div className="flex items-center space-x-2 font-mono text-sm md:text-base">
          <span className="text-[var(--vscode-teal)] font-semibold">
            dave@portfolio
          </span>
          <span className="text-[var(--vscode-text-secondary)]">:</span>
          <span className="text-[var(--vscode-blue)]">{currentPath}</span>
          <span className="text-[var(--vscode-text-primary)]">$</span>
          <span className="inline-block w-2 h-4 bg-[var(--vscode-text-primary)] animate-cursor-blink ml-1"></span>
        </div>
      </div>
    </header>
  );
}
