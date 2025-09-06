import React, { createContext, useContext, useState } from 'react';

const PersonaContext = createContext<any>(null);

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persona, setPersona] = useState({
    voice: 'Neutral',
    avatar: '🤖',
    emotion: 50,
    style: 'Formal'
  });

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => useContext(PersonaContext);
