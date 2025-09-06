import React from 'react';
import EnvironmentSelector from './EnvironmentSelector';

const DeploymentToolbar: React.FC = () => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#1E88E5]">🚀 Agent Deployment</h2>
    <div className="flex space-x-4">
      <EnvironmentSelector />
      <button className="btn-secondary">Export Logs</button>
    </div>
  </div>
);

export default DeploymentToolbar;
