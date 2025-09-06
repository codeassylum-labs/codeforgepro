import React from 'react';

const PersonaShareButton: React.FC = () => (
  <button
    className="bg-[#D81B60] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#C2185B] transition-transform hover:scale-105"
    onClick={() => alert('Persona shared!')}
  >
    🚀 Share Persona
  </button>
);

export default PersonaShareButton;
