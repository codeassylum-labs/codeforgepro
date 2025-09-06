import React from 'react';
import AcademyModule from './AcademyModule';

const modules = [
  { title: 'Prompt Engineering', description: 'Master the art of system prompts.' },
  { title: 'Workflow Automation', description: 'Build powerful ForgeFlow logic.' },
  { title: 'Agent Monetization', description: 'List and earn from your agents.' }
];

const ModuleViewer: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {modules.map((mod, idx) => (
      <AcademyModule
        key={idx}
        title={mod.title}
        description={mod.description}
        onSelect={() => alert(`Selected: ${mod.title}`)}
      />
    ))}
  </div>
);

export default ModuleViewer;
