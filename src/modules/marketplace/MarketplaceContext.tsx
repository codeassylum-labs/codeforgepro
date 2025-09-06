import React, { createContext, useContext, useState } from 'react';
import { AgentListing } from './AgentStore';

const MarketplaceContext = createContext<any>(null);

export const MarketplaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listings, setListings] = useState<AgentListing[]>([]);

  const addListing = (agent: AgentListing) => setListings((prev) => [...prev, agent]);

  return (
    <MarketplaceContext.Provider value={{ listings, addListing }}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => useContext(MarketplaceContext);
