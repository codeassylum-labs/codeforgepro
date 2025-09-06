import React, { useState } from 'react';

const triggers = ['On Message', 'On Form Submit', 'On Schedule', 'On API Call'];

const TriggerSelector: React.FC = () => {
  const [selectedTrigger, setSelectedTrigger] = useState(triggers[0]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Trigger</label>
      <select
        value={selectedTrigger}
        onChange={(e) => setSelectedTrigger(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
      >
        {triggers.map((trigger, idx) => (
          <option key={idx} value={trigger}>{trigger}</option>
        ))}
      </select>
    </div>
  );
};

export default TriggerSelector;
