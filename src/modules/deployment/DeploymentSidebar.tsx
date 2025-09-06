import React from 'react';

const DeploymentSidebar: React.FC = () => (
  <aside className="w-[240px] bg-white border-r border-gray-200 p-6">
    <h3 className="text-lg font-semibold mb-4">Deployment</h3>
    <ul className="space-y-3 text-[#1C1C1C]">
      <li className="hover:text-[#1E88E5]">Agents</li>
      <li className="hover:text-[#1E88E5]">Environments</li>
      <li className="hover:text-[#1E88E5]">Runtime Logs</li>
      <li className="hover:text-[#1E88E5]">Version History</li>
    </ul>
  </aside>
);

export default DeploymentSidebar;
