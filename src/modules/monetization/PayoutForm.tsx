import React, { useState } from 'react';

const PayoutForm: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    alert(`Payout of ₦${amount} submitted`);
  };

  return (
    <form className="bg-white rounded-lg shadow-md p-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <h3 className="text-lg font-semibold mb-4">Submit Payout</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        placeholder="Amount"
      />
      <button className="btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default PayoutForm;
