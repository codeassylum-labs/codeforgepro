import React from 'react';

const agents = [
  { name: 'SupportBot', role: 'Editor' },
  { name: 'SalesGenie', role: 'Viewer' }
];

const SharedAgents: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">Shared Agents</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      {agents.map((agent, idx) => (
        <li key={idx}>{agent.name} — {agent.role}</li>
      ))}
    </ul>
  </div>
);

export default SharedAgents;
