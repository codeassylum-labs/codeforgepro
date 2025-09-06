import React from 'react';
import { SpotlightCreator } from './SpotlightTypes';

const SpotlightCard: React.FC<{ creator: SpotlightCreator }> = ({ creator }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105">
    <h3 className="text-lg font-semibold text-[#1E88E5] mb-1">{creator.name}</h3>
    <p className="text-sm text-gray-600">{creator.country}</p>
    <span className="text-sm font-bold text-[#D81B60]">₦{creator.earnings}</span>
    <div className="mt-2 text-xs bg-[#1E88E5] text-white px-3 py-1 rounded-full inline-block">{creator.badge}</div>
  </div>
);

export default SpotlightCard;
