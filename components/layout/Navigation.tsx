'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'About Me', href: '/', command: 'cd ~/about' },
  { label: 'Experience', href: '/experience', command: 'cd ~/experience' },
  {
    label: 'Hobbies & Side Projects',
    href: '/hobbies',
    command: 'cd ~/hobbies',
  },
  { label: 'Inspiring Minds', href: '/people', command: 'cd ~/people' },
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
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block border-b border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-secondary)]"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <ul className="flex space-x-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    block px-4 py-3 font-mono text-sm transition-all
                    hover:bg-[var(--vscode-bg-hover)]
                    ${
                      isActive(item.href)
                        ? 'text-[var(--vscode-blue)] border-b-2 border-[var(--vscode-blue)] bg-[var(--vscode-bg-tertiary)]'
                        : 'text-[var(--vscode-text-primary)] border-b-2 border-transparent'
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  <span className="text-[var(--vscode-text-disabled)]">$ </span>
                  <span className="hover:text-[var(--vscode-blue)]">
                    {item.command}
                  </span>
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
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block p-4 font-mono text-lg border border-[var(--vscode-border-primary)] rounded
                      transition-all hover:bg-[var(--vscode-bg-secondary)]
                      ${
                        isActive(item.href)
                          ? 'bg-[var(--vscode-bg-tertiary)] text-[var(--vscode-blue)] border-[var(--vscode-blue)]'
                          : 'text-[var(--vscode-text-primary)]'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <span className="text-[var(--vscode-text-disabled)] mr-2">
                        $
                      </span>
                      <span className="text-[var(--vscode-teal)] mr-2">
                        {item.command}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--vscode-text-secondary)] mt-1 ml-4">
                      → {item.label}
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
