import React from 'react';

const voices = ['Neutral', 'Friendly', 'Professional', 'Sarcastic'];

const VoiceSelector: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Voice Style</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      {voices.map((voice, idx) => (
        <option key={idx} value={voice}>{voice}</option>
      ))}
    </select>
  </div>
);

export default VoiceSelector;
