import React from 'react';

const EarningsCard: React.FC<{ earnings: number }> = ({ earnings }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105">
    <h4 className="text-sm text-gray-600 mb-1">Total Earnings</h4>
    <div className="text-xl font-bold text-[#1E88E5]">₦{earnings.toLocaleString()}</div>
  </div>
);

export default EarningsCard;
