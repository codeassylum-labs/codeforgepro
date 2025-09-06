import React from 'react';

const InsightToolbar: React.FC = () => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#1E88E5]">📊 Creator Analytics</h2>
    <button className="btn-secondary">Export CSV</button>
  </div>
);

export default InsightToolbar;
