import React from 'react';

const LanguageSelector: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="pt">Portuguese</option>
    </select>
  </div>
);

export default LanguageSelector;
