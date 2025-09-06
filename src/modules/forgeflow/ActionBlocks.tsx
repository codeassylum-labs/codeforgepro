import React, { useState } from 'react';

const ActionBlocks: React.FC = () => {
  const [actions, setActions] = useState([]);

  const addAction = () => {
    const newAction = {
      id: Date.now(),
      type: 'Send Email',
      config: { to: '', subject: '', body: '' },
    };
    setActions([...actions, newAction]);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Actions</h3>
      <button className="bg-[#1E88E5] text-white px-4 py-2 rounded-md mb-4" onClick={addAction}>Add Action</button>
      <ul className="space-y-2">
        {actions.map((action) => (
          <li key={action.id} className="text-sm text-gray-700">{action.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionBlocks;
