import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext<any>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [motion, setMotion] = useState('enabled');

  return (
    <SettingsContext.Provider value={{ theme, setTheme, language, setLanguage, motion, setMotion }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
