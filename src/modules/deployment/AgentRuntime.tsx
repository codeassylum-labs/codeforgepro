import React from 'react';
import DeployButton from './DeployButton';
import RollbackButton from './RollbackButton';
import AgentUptime from './AgentUptime';

const AgentRuntime: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">Agent Runtime</h3>
    <AgentUptime />
    <div className="flex space-x-4 mt-4">
      <DeployButton />
      <RollbackButton />
    </div>
  </div>
);

export default AgentRuntime;
