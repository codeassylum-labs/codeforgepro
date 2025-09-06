import React from 'react';
import { usePersona } from './PersonaContext';

const PersonaPreview: React.FC = () => {
  const { persona } = usePersona();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
      <p className="text-2xl">{persona.avatar}</p>
      <p className="text-sm text-gray-600">Voice: {persona.voice}</p>
      <p className="text-sm text-gray-600">Style: {persona.style}</p>
      <p className="text-sm text-gray-600">Emotion: {persona.emotion}%</p>
    </div>
  );
};

export default PersonaPreview;
