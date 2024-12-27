'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MouseContextType {
  x: number;
  y: number;
}

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const MouseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState<MouseContextType>({ x: 0, y: 0 });

  const updateMousePosition = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return <MouseContext.Provider value={position}>{children}</MouseContext.Provider>;
};

export const useMousePosition = (): MouseContextType => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error('useMousePosition must be used within a MouseProvider');
  }
  return context;
};
