import React, { createContext, useContext, useState } from 'react';

const TeamContext = createContext<any>(null);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState([]);

  return (
    <TeamContext.Provider value={{ members, setMembers }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
