import React, { useState } from 'react';

const WalletDashboard: React.FC = () => {
  const [credits, setCredits] = useState(100);
  const handlePurchase = () => setCredits((prev) => prev + 50);

  return (
    <div className="p-8 bg-[#F5F7FA] min-h-screen">
      <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">Your Wallet</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-2">AI Credits</h3>
        <p className="text-sm text-gray-600 mb-4">Available: {credits}</p>
        <button className="bg-[#D81B60] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#C2185B]" onClick={handlePurchase}>
          Buy 50 Credits
        </button>
      </div>
    </div>
  );
};

export default WalletDashboard;
