import React, { createContext, useContext, useState } from 'react';
import { ForgeFlow } from './FlowTypes';

const FlowBuilderContext = createContext<any>(null);

export const FlowBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [flow, setFlow] = useState<ForgeFlow>({
    id: '',
    name: '',
    trigger: 'On Message',
    actions: [],
    createdAt: '',
    updatedAt: '',
  });

  return (
    <FlowBuilderContext.Provider value={{ flow, setFlow }}>
      {children}
    </FlowBuilderContext.Provider>
  );
};

export const useFlowBuilder = () => useContext(FlowBuilderContext);
