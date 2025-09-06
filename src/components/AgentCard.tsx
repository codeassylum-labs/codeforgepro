import React from 'react';

interface Props {
  name: string;
  description: string;
  category: string;
  earnings?: string;
}

const AgentCard: React.FC<Props> = ({ name, description, category, earnings }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
    <h3 className="text-xl font-bold text-[#1E88E5] mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{description}</p>
    <span className="inline-block bg-[#F5F7FA] text-[#1C1C1C] px-3 py-1 rounded-full mb-2">
      {category}
    </span>
    {earnings && (
      <div className="mt-2 text-sm text-green-600 font-medium">
        Earnings: {earnings}
      </div>
    )}
  </div>
);

export default AgentCard;
