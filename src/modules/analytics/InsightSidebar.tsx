import React from 'react';

const InsightSidebar: React.FC = () => (
  <aside className="w-[240px] bg-white border-r border-gray-200 p-6">
    <h3 className="text-lg font-semibold mb-4">Analytics</h3>
    <ul className="space-y-3 text-[#1C1C1C]">
      <li className="hover:text-[#1E88E5]">Overview</li>
      <li className="hover:text-[#1E88E5]">Agents</li>
      <li className="hover:text-[#1E88E5]">Earnings</li>
      <li className="hover:text-[#1E88E5]">Growth</li>
    </ul>
  </aside>
);

export default InsightSidebar;
