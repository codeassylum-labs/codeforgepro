import React, { createContext, useContext, useState } from 'react';

const PaymentContext = createContext<any>(null);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  return (
    <PaymentContext.Provider value={{ status, setStatus }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
