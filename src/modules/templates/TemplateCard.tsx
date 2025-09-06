import React from 'react';

const TemplateCard: React.FC<{ template: any }> = ({ template }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105 cursor-pointer">
    <h3 className="text-lg font-semibold text-[#1E88E5] mb-1">{template.title}</h3>
    <p className="text-sm text-gray-600 mb-2">{template.category}</p>
    <span className="text-xs bg-[#F5F7FA] text-[#1C1C1C] px-3 py-1 rounded-full">{template.creator}</span>
  </div>
);

export default TemplateCard;
