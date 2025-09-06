import React from 'react';

const presets = ['Lead Capture', 'Support Bot', 'Newsletter Signup'];

const PresetSelector: React.FC = () => (
  <select className="border border-gray-300 rounded-md p-2 w-full">
    {presets.map((preset, idx) => (
      <option key={idx} value={preset}>{preset}</option>
    ))}
  </select>
);

export default PresetSelector;
