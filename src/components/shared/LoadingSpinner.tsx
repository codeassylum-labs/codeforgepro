import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#1E88E5]"></div>
  </div>
);

export default LoadingSpinner;
