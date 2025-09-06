import React from 'react';

const ReferralBadge: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-[#1E88E5] text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md animate-pulse">
    🌟 Top Referrer: {name}
  </div>
);

export default ReferralBadge;
