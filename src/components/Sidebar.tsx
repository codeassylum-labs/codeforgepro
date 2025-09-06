import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="w-[240px] bg-[#F5F7FA] text-[#1C1C1C] p-4 border-r border-gray-200">
    <ul className="space-y-4 font-medium">
      <li className="hover:text-[#1E88E5]">Agents</li>
      <li className="hover:text-[#1E88E5]">Workflows</li>
      <li className="hover:text-[#1E88E5]">Templates</li>
      <li className="hover:text-[#1E88E5]">Wallet</li>
    </ul>
  </aside>
);

export default Sidebar;
