import React from 'react';

const TrendArrow: React.FC<{ direction: 'up' | 'down' }> = ({ direction }) => {
  const color = direction === 'up' ? 'text-green-500' : 'text-red-500';
  const symbol = direction === 'up' ? '↑' : '↓';
  return <span className={`ml-2 text-sm ${color}`}>{symbol}</span>;
};

export default TrendArrow;
