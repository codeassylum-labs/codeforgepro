import React, { createContext, useContext, useState } from 'react';
import { SpotlightCreator } from './SpotlightTypes';

const SpotlightContext = createContext<any>(null);

export const SpotlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [creators, setCreators] = useState<SpotlightCreator[]>([]);

  return (
    <SpotlightContext.Provider value={{ creators, setCreators }}>
      {children}
    </SpotlightContext.Provider>
  );
};

export const useSpotlight = () => useContext(SpotlightContext);
