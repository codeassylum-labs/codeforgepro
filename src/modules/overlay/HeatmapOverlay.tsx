import React from 'react';
import HeatmapGrid from './HeatmapGrid';
import IntensityLegend from './IntensityLegend';

const HeatmapOverlay: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">🔥 Agent Activity Heatmap</h3>
    <HeatmapGrid />
    <IntensityLegend />
  </div>
);

export default HeatmapOverlay;
