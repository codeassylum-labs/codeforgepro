import React, { createContext, useContext, useState } from 'react';

const MonetizationContext = createContext<any>(null);

export const MonetizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [earnings, setEarnings] = useState(0);
  const [commissions, setCommissions] = useState([]);
  const [payouts, setPayouts] = useState([]);

  return (
    <MonetizationContext.Provider value={{ earnings, setEarnings, commissions, setCommissions, payouts, setPayouts }}>
      {children}
    </MonetizationContext.Provider>
  );
};

export const useMonetization = () => useContext(MonetizationContext);
