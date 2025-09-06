import React from 'react';

interface Props {
  name: string;
  date: string;
}

const CertificationBadge: React.FC<Props> = ({ name, date }) => (
  <div className="bg-[#1E88E5] text-white rounded-xl p-6 shadow-lg text-center animate-pulse">
    <h3 className="text-xl font-bold mb-2">ForgeCreator Certified</h3>
    <p className="text-sm">Awarded to <strong>{name}</strong></p>
    <p className="text-xs mt-2">Date: {date}</p>
  </div>
);

export default CertificationBadge;
