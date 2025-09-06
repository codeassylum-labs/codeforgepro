import React from 'react';

const Toast: React.FC<{ message: string; type?: 'success' | 'error' }> = ({ message, type = 'success' }) => {
  const bg = type === 'success' ? 'bg-[#1E88E5]' : 'bg-[#D81B60]';
  return (
    <div className={`${bg} text-white px-4 py-2 rounded shadow-md animate-slide-in`}>
      {message}
    </div>
  );
};

export default Toast;
