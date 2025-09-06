import React from 'react';

const RazorpayCheckout: React.FC<{ amount: number }> = ({ amount }) => {
  const handleCheckout = async () => {
    const response = await fetch('/api/payments/razorpay', {
      method: 'POST',
      body: JSON.stringify({ amount }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    const options = {
      key: 'RAZORPAY_KEY_ID',
      amount: amount * 100,
      currency: 'INR',
      name: 'CodeForge Studio',
      description: 'AI Credits',
      order_id: data.orderId,
      handler: () => alert('Payment successful'),
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <button className="btn-primary" onClick={handleCheckout}>
      Pay with Razorpay
    </button>
  );
};

export default RazorpayCheckout;
