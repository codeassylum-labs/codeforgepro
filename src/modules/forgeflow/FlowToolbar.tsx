import React from 'react';

const FlowToolbar: React.FC = () => (
  <div className="flex justify-between items-center bg-white p-4 shadow-sm">
    <h3 className="text-lg font-semibold text-[#1E88E5]">ForgeFlow Builder</h3>
    <div className="space-x-4">
      <button className="btn-secondary">Save</button>
      <button className="btn-primary">Run</button>
    </div>
  </div>
);

export default FlowToolbar;
