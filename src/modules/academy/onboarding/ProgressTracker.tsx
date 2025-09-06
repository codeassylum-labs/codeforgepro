import React from 'react';

const ProgressTracker: React.FC<{ step: number; total: number }> = ({ step, total }) => {
  const percent = Math.round((step / total) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
      <div className="bg-[#1E88E5] h-4 rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressTracker;
