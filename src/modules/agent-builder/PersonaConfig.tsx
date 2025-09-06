import React, { useState } from 'react';

const PersonaConfig: React.FC = () => {
  const [name, setName] = useState('');
  const [tone, setTone] = useState('neutral');

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />
      <label className="block text-sm font-medium text-gray-700 mb-2">Agent Tone</label>
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
      >
        <option value="neutral">Neutral</option>
        <option value="friendly">Friendly</option>
        <option value="professional">Professional</option>
        <option value="sarcastic">Sarcastic</option>
      </select>
    </div>
  );
};

export default PersonaConfig;
