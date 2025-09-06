import React from 'react';
import { AgentListing } from './AgentStore';

const FeaturedAgents: React.FC<{ agents: AgentListing[] }> = ({ agents }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {agents.map((agent) => (
      <div key={agent.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105">
        <h3 className="text-lg font-semibold text-[#1E88E5] mb-1">{agent.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{agent.category}</p>
        <span className="text-sm font-bold text-[#D81B60]">₦{agent.price}</span>
      </div>
    ))}
  </div>
);

export default FeaturedAgents;
