import React from 'react';

const IntensityLegend: React.FC = () => (
  <div className="flex space-x-4 mt-4 text-sm text-gray-600">
    <div className="flex items-center space-x-1"><div className="w-4 h-4 bg-green-500" />Low</div>
    <div className="flex items-center space-x-1"><div className="w-4 h-4 bg-yellow-500" />Medium</div>
    <div className="flex items-center space-x-1"><div className="w-4 h-4 bg-red-500" />High</div>
  </div>
);

export default IntensityLegend;
