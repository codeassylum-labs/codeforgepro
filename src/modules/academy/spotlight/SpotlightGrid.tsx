import React from 'react';
import SpotlightCard from './SpotlightCard';
import { SpotlightCreator } from './SpotlightTypes';

const SpotlightGrid: React.FC<{ creators: SpotlightCreator[] }> = ({ creators }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {creators.map((creator) => (
      <SpotlightCard key={creator.id} creator={creator} />
    ))}
  </div>
);

export default SpotlightGrid;
