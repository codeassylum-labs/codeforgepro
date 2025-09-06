import React from 'react';

const AgentPermissions: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Access Level</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      <option value="viewer">Viewer</option>
      <option value="editor">Editor</option>
      <option value="admin">Admin</option>
    </select>
  </div>
);

export default AgentPermissions;
