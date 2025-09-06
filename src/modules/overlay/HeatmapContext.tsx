import React, { createContext, useContext, useState } from 'react';

const HeatmapContext = createContext<any>(null);

export const HeatmapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [zones, setZones] = useState([]);

  return (
    <HeatmapContext.Provider value={{ zones, setZones }}>
      {children}
    </HeatmapContext.Provider>
  );
};

export const useHeatmap = () => useContext(HeatmapContext);
