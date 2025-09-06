import React from 'react';

const CollabBadge: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-[#1E88E5] text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md animate-pulse">
    🏅 Top Collaborator: {name}
  </div>
);

export default CollabBadge;
