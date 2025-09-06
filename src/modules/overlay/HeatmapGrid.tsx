import React from 'react';
import UsageIntensity from './UsageIntensity';

const mockZones = [20, 40, 60, 80, 100];

const HeatmapGrid: React.FC = () => (
  <div className="grid grid-cols-5 gap-2">
    {mockZones.map((level, idx) => (
      <UsageIntensity key={idx} level={level} />
    ))}
  </div>
);

export default HeatmapGrid;
