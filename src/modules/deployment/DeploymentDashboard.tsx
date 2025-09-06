import React from 'react';
import DeploymentSidebar from './DeploymentSidebar';
import DeploymentToolbar from './DeploymentToolbar';
import AgentRuntime from './AgentRuntime';
import VersionHistory from './VersionHistory';

const DeploymentDashboard: React.FC = () => (
  <div className="flex min-h-screen bg-[#F5F7FA]">
    <DeploymentSidebar />
    <main className="flex-1 p-8">
      <DeploymentToolbar />
      <AgentRuntime />
      <VersionHistory />
    </main>
  </div>
);

export default DeploymentDashboard;
