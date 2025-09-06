import React from 'react';

const environments = ['Development', 'Staging', 'Production'];

const EnvironmentSelector: React.FC = () => (
  <select className="border border-gray-300 rounded-md p-2 w-full">
    {environments.map((env, idx) => (
      <option key={idx} value={env}>{env}</option>
    ))}
  </select>
);

export default EnvironmentSelector;
