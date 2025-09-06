import React from 'react';

const FlowSidebar: React.FC = () => (
  <aside className="w-[240px] bg-[#F5F7FA] p-4 border-r border-gray-200">
    <ul className="space-y-4 font-medium text-[#1C1C1C]">
      <li className="hover:text-[#1E88E5]">Triggers</li>
      <li className="hover:text-[#1E88E5]">Actions</li>
      <li className="hover:text-[#1E88E5]">History</li>
    </ul>
  </aside>
);

export default FlowSidebar;
