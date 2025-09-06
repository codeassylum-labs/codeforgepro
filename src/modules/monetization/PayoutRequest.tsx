import React, { useState } from 'react';

const PayoutRequest: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const handleRequest = () => {
    alert(`Requested payout of ₦${amount}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Request Payout</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        placeholder="Enter amount"
      />
      <button className="btn-primary" onClick={handleRequest}>Submit Request</button>
    </div>
  );
};

export default PayoutRequest;
