import React from 'react';

const ThemeManager: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System Default</option>
    </select>
  </div>
);

export default ThemeManager;
