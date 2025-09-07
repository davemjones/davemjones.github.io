'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

export default function Header() {
  const { hoveredFile } = useNavigation();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (hoveredFile) {
      const command = `cat ${hoveredFile}`;
      setIsTyping(true);
      setDisplayText('');

      // Typing animation
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < command.length) {
          setDisplayText(command.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50); // Typing speed

      return () => {
        clearInterval(typingInterval);
      };
    } else {
      // Clear text when not hovering
      setDisplayText('');
      setIsTyping(false);
    }
  }, [hoveredFile]);

  return (
    <header className="border-b border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-primary)] sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 md:h-[72px] flex items-center">
        <div className="flex items-center space-x-2 font-mono text-sm md:text-base">
          <span className="text-[var(--vscode-teal)] font-semibold">
            dave@portfolio
          </span>
          <span className="text-[var(--vscode-text-secondary)]">:</span>
          <span className="text-[var(--vscode-blue)]">~/</span>
          <span className="text-[var(--vscode-text-primary)]">$</span>
          {displayText && (
            <span className="text-[var(--vscode-text-primary)] ml-2">
              {displayText}
            </span>
          )}
          <span
            className={`inline-block w-2 h-4 bg-[var(--vscode-text-primary)] ${isTyping ? 'animate-none' : 'animate-cursor-blink'} ml-1`}
          ></span>
        </div>
      </div>
    </header>
  );
}
