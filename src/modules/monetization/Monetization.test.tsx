import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PayoutForm from './PayoutForm';

test('submits payout form', () => {
  render(<PayoutForm />);
  fireEvent.change(screen.getByPlaceholderText(/Amount/i), { target: { value: '5000' } });
  fireEvent.click(screen.getByText(/Submit/i));
  expect(window.alert).toHaveBeenCalledWith('Payout of ₦5000 submitted');
});
