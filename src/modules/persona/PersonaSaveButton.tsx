import React from 'react';

const PersonaSaveButton: React.FC = () => (
  <button
    className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0] transition-transform hover:scale-105"
    onClick={() => alert('Persona saved!')}
  >
    💾 Save Persona
  </button>
);

export default PersonaSaveButton;
