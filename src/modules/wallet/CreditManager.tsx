import React, { useState } from 'react';

const CreditManager: React.FC = () => {
  const [credits, setCredits] = useState(100);
  const [amount, setAmount] = useState(50);

  const handlePurchase = () => {
    setCredits((prev) => prev + amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Buy Credits</h3>
      <p className="text-sm text-gray-600 mb-4">Current Balance: {credits}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />
      <button
        className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0]"
        onClick={handlePurchase}
      >
        Buy {amount} Credits
      </button>
    </div>
  );
};

export default CreditManager;
import React, { useState } from 'react';

const CreditManager: React.FC = () => {
  const [credits, setCredits] = useState(100);
  const [amount, setAmount] = useState(50);

  const handlePurchase = () => {
    setCredits((prev) => prev + amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Buy Credits</h3>
      <p className="text-sm text-gray-600 mb-4">Current Balance: {credits}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />
      <button
        className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0]"
        onClick={handlePurchase}
      >
        Buy {amount} Credits
      </button>
    </div>
  );
};

export default CreditManager;
import React, { useState } from 'react';

const CreditManager: React.FC = () => {
  const [credits, setCredits] = useState(100);
  const [amount, setAmount] = useState(50);

  const handlePurchase = () => {
    setCredits((prev) => prev + amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Buy Credits</h3>
      <p className="text-sm text-gray-600 mb-4">Current Balance: {credits}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />
      <button
        className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0]"
        onClick={handlePurchase}
      >
        Buy {amount} Credits
      </button>
    </div>
  );
};

export default CreditManager;
import React, { useState } from 'react';

const CreditManager: React.FC = () => {
  const [credits, setCredits] = useState(100);
  const [amount, setAmount] = useState(50);

  const handlePurchase = () => {
    setCredits((prev) => prev + amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Buy Credits</h3>
      <p className="text-sm text-gray-600 mb-4">Current Balance: {credits}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />
      <button
        className="bg-[#1E88E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1565C0]"
        onClick={handlePurchase}
      >
        Buy {amount} Credits
      </button>
    </div>
  );
};

export default CreditManager;
