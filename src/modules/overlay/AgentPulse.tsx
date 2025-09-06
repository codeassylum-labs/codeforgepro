import React from 'react';

const AgentPulse: React.FC<{ status: 'idle' | 'active' | 'overloaded' }> = ({ status }) => {
  const color = status === 'idle' ? 'bg-gray-400' : status === 'active' ? 'bg-green-500' : 'bg-red-500';
  return <div className={`w-3 h-3 rounded-full animate-pulse ${color}`} />;
};

export default AgentPulse;
