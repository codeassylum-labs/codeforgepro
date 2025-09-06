import React from 'react';

const FlowRunButton: React.FC = () => (
  <button
    className="bg-[#D81B60] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#C2185B] transition-transform hover:scale-105"
    onClick={() => alert('Flow running...')}
  >
    ⚡ Run Flow
  </button>
);

export default FlowRunButton;
