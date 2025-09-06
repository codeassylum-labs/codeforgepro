import React from 'react';

const FlowSaveButton: React.FC = () => (
  <button
    className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0] transition-transform hover:scale-105"
    onClick={() => alert('Flow saved!')}
  >
    💾 Save Flow
  </button>
);

export default FlowSaveButton;
