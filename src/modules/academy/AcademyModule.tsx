import React from 'react';

interface Props {
  title: string;
  description: string;
  onSelect: () => void;
}

const AcademyModule: React.FC<Props> = ({ title, description, onSelect }) => (
  <div
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
    onClick={onSelect}
  >
    <h3 className="text-lg font-semibold text-[#1E88E5] mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default AcademyModule;
