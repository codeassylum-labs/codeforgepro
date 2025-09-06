import React from 'react';

const InlineFeedback: React.FC<{ message: string; type?: 'success' | 'error' }> = ({ message, type = 'success' }) => {
  const color = type === 'success' ? 'text-green-600' : 'text-red-600';
  return <p className={`text-sm mt-2 ${color}`}>{message}</p>;
};

export default InlineFeedback;
