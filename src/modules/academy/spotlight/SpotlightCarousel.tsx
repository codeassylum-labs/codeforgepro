import React from 'react';
import { SpotlightCreator } from './SpotlightTypes';

const SpotlightCarousel: React.FC<{ creators: SpotlightCreator[] }> = ({ creators }) => (
  <div className="flex overflow-x-auto space-x-4 p-4">
    {creators.map((creator) => (
      <div key={creator.id} className="min-w-[200px] bg-white rounded-lg shadow-md p-4">
        <h4 className="text-lg font-semibold text-[#1E88E5]">{creator.name}</h4>
        <p className="text-sm text-gray-600">{creator.country}</p>
        <p className="text-sm text-[#D81B60] font-bold">₦{creator.earnings}</p>
      </div>
    ))}
  </div>
);

export default SpotlightCarousel;
