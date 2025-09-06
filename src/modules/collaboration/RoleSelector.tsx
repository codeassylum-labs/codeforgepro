import React from 'react';

const RoleSelector: React.FC = () => (
  <select className="border border-gray-300 rounded-md p-2 w-full">
    <option value="viewer">Viewer</option>
    <option value="editor">Editor</option>
    <option value="admin">Admin</option>
  </select>
);

export default RoleSelector;
