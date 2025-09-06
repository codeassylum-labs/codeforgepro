import React from 'react';

const RollbackButton: React.FC = () => (
  <button
    className="bg-[#D81B60] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#C2185B] transition-transform hover:scale-105"
    onClick={() => alert('Rolled back to previous version')}
  >
    ⏪ Rollback
  </button>
);

export default RollbackButton;
