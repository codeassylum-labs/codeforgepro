import React from 'react';

const UsageIntensity: React.FC<{ level: number }> = ({ level }) => {
  const color = level > 80 ? 'bg-red-500' : level > 50 ? 'bg-yellow-500' : 'bg-green-500';
  return <div className={`w-4 h-4 ${color} rounded-sm`} />;
};

export default UsageIntensity;
