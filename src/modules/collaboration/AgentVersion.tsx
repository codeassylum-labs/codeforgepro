import React from 'react';
import VersionDiff from './VersionDiff';

const AgentVersion: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">Agent Versions</h3>
    <VersionDiff />
  </div>
);

export default AgentVersion;
