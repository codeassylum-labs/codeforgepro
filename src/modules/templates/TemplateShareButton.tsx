import React from 'react';

const TemplateShareButton: React.FC = () => (
  <button
    className="bg-[#D81B60] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#C2185B] transition-transform hover:scale-105"
    onClick={() => alert('Template shared!')}
  >
    🚀 Share Template
  </button>
);

export default TemplateShareButton;
