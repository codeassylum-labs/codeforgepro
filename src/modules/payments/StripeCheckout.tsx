import React from 'react';

const StripeCheckout: React.FC<{ amount: number }> = ({ amount }) => {
  const handleCheckout = async () => {
    const response = await fetch('/api/payments/stripe', {
      method: 'POST',
      body: JSON.stringify({ amount }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    window.location.href = data.sessionUrl;
  };

  return (
    <button className="btn-primary" onClick={handleCheckout}>
      Pay with Stripe
    </button>
  );
};

export default StripeCheckout;
