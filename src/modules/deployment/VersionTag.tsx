import React from 'react';

const VersionTag: React.FC<{ id: string; status: string }> = ({ id, status }) => {
  const color = status === 'Live' ? 'bg-green-500' : status === 'Beta' ? 'bg-yellow-500' : 'bg-gray-400';
  return (
    <span className={`text-white text-xs px-2 py-1 rounded-full ${color}`}>
      {id}
    </span>
  );
};

export default VersionTag;
