import React from 'react';
import PersonaConfig from './PersonaConfig';
import PromptEditor from './PromptEditor';
import AgentPreview from './AgentPreview';

const Builder: React.FC = () => (
  <div className="p-8 bg-[#F5F7FA] min-h-screen">
    <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">Create Your Agent</h2>
    <PersonaConfig />
    <PromptEditor />
    <AgentPreview />
  </div>
);

export default Builder;
