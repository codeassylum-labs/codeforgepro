import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StripeCheckout from './StripeCheckout';

test('stripe checkout button triggers redirect', async () => {
  render(<StripeCheckout amount={100} />);
  fireEvent.click(screen.getByText(/Pay with Stripe/i));
  expect(window.location.href).toContain('stripe');
});
