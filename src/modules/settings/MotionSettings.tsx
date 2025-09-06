import React from 'react';

const MotionSettings: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Motion Effects</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      <option value="enabled">Enabled</option>
      <option value="reduced">Reduced</option>
      <option value="disabled">Disabled</option>
    </select>
  </div>
);

export default MotionSettings;
