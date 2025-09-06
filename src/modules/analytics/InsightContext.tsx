import React, { createContext, useContext, useState } from 'react';
import { InsightMetric } from './InsightTypes';

const InsightContext = createContext<any>(null);

export const InsightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<InsightMetric[]>([]);

  return (
    <InsightContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </InsightContext.Provider>
  );
};

export const useInsights = () => useContext(InsightContext);
