import React from 'react';

const CreatorInsights: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-2">Insights for {name}</h3>
    <p className="text-sm text-gray-600">Your agents generated ₦45,000 this month.</p>
    <p className="text-sm text-gray-600">Top category: Productivity</p>
  </div>
);

export default CreatorInsights;
