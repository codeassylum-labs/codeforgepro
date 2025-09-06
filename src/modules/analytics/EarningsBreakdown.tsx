import React from 'react';

const EarningsBreakdown: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-2">Earnings Breakdown</h3>
    <ul className="text-sm text-gray-700 space-y-2">
      <li>Marketplace: ₦30,000</li>
      <li>Workflows: ₦10,000</li>
      <li>Templates: ₦5,000</li>
    </ul>
  </div>
);

export default EarningsBreakdown;
