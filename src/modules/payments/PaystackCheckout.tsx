import React from 'react';

const PaystackCheckout: React.FC<{ email: string; amount: number }> = ({ email, amount }) => {
  const handleCheckout = async () => {
    const response = await fetch('/api/payments/paystack', {
      method: 'POST',
      body: JSON.stringify({ email, amount }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    window.location.href = data.authorization_url;
  };

  return (
    <button className="btn-primary" onClick={handleCheckout}>
      Pay with Paystack
    </button>
  );
};

export default PaystackCheckout;
