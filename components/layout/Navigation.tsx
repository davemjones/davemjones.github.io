'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'About Me', href: '/', fileName: 'about.md', icon: '📝' },
  {
    label: 'Experience',
    href: '/experience',
    fileName: 'experience.tsx',
    icon: '⚛️',
  },
  {
    label: 'Hobbies & Side Projects',
    href: '/hobbies',
    fileName: 'hobbies.json',
    icon: '📦',
  },
  {
    label: 'Inspiring Minds',
    href: '/people',
    fileName: 'people.yml',
    icon: '👥',
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => {
    return pathname === href;
  };

  // Handle focus trap and keyboard navigation
  useEffect(() => {
    if (mobileMenuOpen) {
      // Focus first link when menu opens
      const firstLink = mobileMenuRef.current?.querySelector('a');
      firstLink?.focus();

      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore background scroll
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (mobileMenuOpen && e.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation - VSCode File Tabs */}
      <nav
        className="hidden md:block border-b border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-secondary)]"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <ul className="flex" role="list">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`
                    group flex items-center gap-2 px-4 py-2.5 font-mono text-sm transition-all
                    border-r border-[var(--vscode-border-primary)]
                    ${
                      isActive(item.href)
                        ? 'bg-[var(--vscode-bg-primary)] text-[var(--vscode-text-primary)] border-t-2 border-t-[var(--vscode-blue)]'
                        : 'bg-[var(--vscode-bg-tertiary)] text-[var(--vscode-text-secondary)] hover:bg-[var(--vscode-bg-secondary)] border-t-2 border-t-transparent'
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  title={item.label}
                >
                  <span className="text-base opacity-80">{item.icon}</span>
                  <span
                    className={`${isActive(item.href) ? '' : 'italic opacity-90'}`}
                  >
                    {item.fileName}
                  </span>
                  {isActive(item.href) && (
                    <span className="ml-1 w-2 h-2 rounded-full bg-white opacity-80"></span>
                  )}
                  {!isActive(item.href) && (
                    <button
                      className="ml-2 opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity"
                      aria-label={`Close ${item.label} tab`}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      ×
                    </button>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        ref={toggleButtonRef}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] p-2 bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--vscode-blue)]"
        aria-label={`${mobileMenuOpen ? 'Close' : 'Open'} navigation menu`}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-[var(--vscode-text-primary)] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[var(--vscode-text-primary)] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[var(--vscode-text-primary)] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`
          md:hidden fixed inset-0 z-50 bg-[var(--vscode-bg-primary)] 
          transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-heading"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="p-8 pt-20">
          <h2 id="mobile-nav-heading" className="sr-only">
            Site Navigation
          </h2>
          <nav aria-label="Main navigation">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block p-4 font-mono text-base border border-[var(--vscode-border-primary)] rounded-lg
                      transition-all hover:bg-[var(--vscode-bg-secondary)]
                      ${
                        isActive(item.href)
                          ? 'bg-[var(--vscode-bg-tertiary)] border-[var(--vscode-blue)]'
                          : 'bg-[var(--vscode-bg-secondary)] text-[var(--vscode-text-primary)]'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl opacity-80">{item.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`${isActive(item.href) ? 'text-[var(--vscode-blue)]' : 'text-[var(--vscode-text-secondary)] italic'}`}
                          >
                            {item.fileName}
                          </span>
                          {isActive(item.href) && (
                            <span className="w-2 h-2 rounded-full bg-[var(--vscode-blue)] opacity-80"></span>
                          )}
                        </div>
                        <div className="text-xs text-[var(--vscode-text-disabled)] mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
