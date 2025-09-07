'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  hoveredFile: string | null;
  setHoveredFile: (file: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [hoveredFile, setHoveredFile] = useState<string | null>(null);

  return (
    <NavigationContext.Provider value={{ hoveredFile, setHoveredFile }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
