import React, { createContext, useContext, useState } from 'react';

const DeploymentContext = createContext<any>(null);

export const DeploymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState('Live');

  return (
    <DeploymentContext.Provider value={{ status, setStatus }}>
      {children}
    </DeploymentContext.Provider>
  );
};

export const useDeployment = () => useContext(DeploymentContext);
