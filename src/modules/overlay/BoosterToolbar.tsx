import React from 'react';

const BoosterToolbar: React.FC = () => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#1E88E5]">📊 Analytics Overlay</h2>
    <div className="space-x-4">
      <button className="btn-secondary">Refresh</button>
      <button className="btn-primary">Export</button>
    </div>
  </div>
);

export default BoosterToolbar;
