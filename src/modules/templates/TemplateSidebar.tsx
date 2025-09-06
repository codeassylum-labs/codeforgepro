import React from 'react';

const TemplateSidebar: React.FC = () => (
  <aside className="w-[240px] bg-white border-r border-gray-200 p-6">
    <h3 className="text-lg font-semibold mb-4">Templates</h3>
    <ul className="space-y-3 text-[#1C1C1C]">
      <li className="hover:text-[#1E88E5]">All</li>
      <li className="hover:text-[#1E88E5]">Productivity</li>
      <li className="hover:text-[#1E88E5]">Support</li>
      <li className="hover:text-[#1E88E5]">Business</li>
    </ul>
  </aside>
);

export default TemplateSidebar;
