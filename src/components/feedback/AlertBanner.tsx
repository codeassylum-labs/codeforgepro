import React from 'react';

const AlertBanner: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-[#D81B60] text-white text-center py-2 px-4">
    ⚠️ {message}
  </div>
);

export default AlertBanner;
