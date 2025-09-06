import React from 'react';

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (val: string) => void;
}

const Input: React.FC<Props> = ({ label, value, placeholder, type = 'text', onChange }) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    />
  </div>
);

export default Input;
