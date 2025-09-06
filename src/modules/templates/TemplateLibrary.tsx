import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import { fetchTemplates } from './TemplateAPI';

const TemplateLibrary: React.FC = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates().then(setTemplates);
  }, []);

  return (
    <div className="p-8 bg-[#F5F7FA] min-h-screen">
      <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">🧩 Template Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((tpl) => (
          <TemplateCard key={tpl.id} template={tpl} />
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;
