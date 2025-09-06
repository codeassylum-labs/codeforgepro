import React from 'react';

const BoosterCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-[#F5F7FA] rounded-lg p-4 shadow hover:shadow-lg transition-transform hover:scale-105">
    <h4 className="text-sm font-semibold text-[#1E88E5] mb-1">{title}</h4>
    <p className="text-xs text-gray-600">{description}</p>
  </div>
);

export default BoosterCard;
