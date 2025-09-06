import React from 'react';

interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

const getButtonClass = (variant: string = 'primary') => {
  switch (variant) {
    case 'primary': return 'bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md';
    case 'secondary': return 'bg-[#F5F7FA] text-[#1C1C1C] border border-gray-300 px-4 py-2 rounded-md';
    case 'ghost': return 'bg-transparent text-[#1E88E5] border border-[#1E88E5] px-4 py-2 rounded-md';
    default: return '';
  }
};

const Button: React.FC<Props> = ({ label, variant, onClick }) => (
  <button className={getButtonClass(variant)} onClick={onClick}>
    {label}
  </button>
);

export default Button;
