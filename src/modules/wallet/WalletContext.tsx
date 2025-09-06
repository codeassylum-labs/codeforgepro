import React, { createContext, useContext, useState } from 'react';
import { Wallet } from './WalletTypes';

const WalletContext = createContext<any>(null);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<Wallet>({
    userId: '',
    credits: 100,
    earnings: 0,
    lastPayout: '',
  });

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
