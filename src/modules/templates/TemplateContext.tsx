import React, { createContext, useContext, useState } from 'react';
import { ForgeTemplate } from './TemplateTypes';

const TemplateContext = createContext<any>(null);

export const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [template, setTemplate] = useState<ForgeTemplate | null>(null);

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);
