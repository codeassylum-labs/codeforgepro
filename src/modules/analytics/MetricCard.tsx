import React from 'react';
import TrendArrow from './TrendArrow';

const MetricCard: React.FC<{ label: string; value: string; trend?: 'up' | 'down' }> = ({ label, value, trend }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105">
    <h4 className="text-sm text-gray-600 mb-1">{label}</h4>
    <div className="text-xl font-bold text-[#1E88E5] flex items-center">
      {value} {trend && <TrendArrow direction={trend} />}
    </div>
  </div>
);

export default MetricCard;
