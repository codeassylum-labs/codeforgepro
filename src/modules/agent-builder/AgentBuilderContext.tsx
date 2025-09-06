import React, { createContext, useContext, useState } from 'react';
import { ForgeAgent } from './AgentTypes';

const AgentBuilderContext = createContext<any>(null);

export const AgentBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [agent, setAgent] = useState<ForgeAgent>({
    id: '',
    name: '',
    prompt: '',
    tone: 'neutral',
    createdAt: '',
    updatedAt: '',
  });

  return (
    <AgentBuilderContext.Provider value={{ agent, setAgent }}>
      {children}
    </AgentBuilderContext.Provider>
  );
};

export const useAgentBuilder = () => useContext(AgentBuilderContext);
