import React from 'react';

const TemplateToolbar: React.FC = () => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#1E88E5]">🧩 Template Builder</h2>
    <button className="btn-secondary">Import Template</button>
  </div>
);

export default TemplateToolbar;
