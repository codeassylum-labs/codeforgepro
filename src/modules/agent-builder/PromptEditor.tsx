import React, { useState } from 'react';

const PromptEditor: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">System Prompt</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        className="w-full border border-gray-300 rounded-md p-3"
      />
    </div>
  );
};

export default PromptEditor;
