import React, { useEffect, useState } from 'react';
import { fetchSpotlight } from './SpotlightAPI';
import SpotlightGrid from './SpotlightGrid';

const CreatorSpotlight: React.FC = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchSpotlight().then(setCreators);
  }, []);

  return (
    <div className="p-8 bg-[#F5F7FA] min-h-screen">
      <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">🌟 Creator Spotlight</h2>
      <SpotlightGrid creators={creators} />
    </div>
  );
};

export default CreatorSpotlight;
