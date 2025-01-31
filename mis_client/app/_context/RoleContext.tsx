'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface RoleContextType {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children } : {children: ReactNode}) => {
  const [role, setRole] = useState<string>('');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};