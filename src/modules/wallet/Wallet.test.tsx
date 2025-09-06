import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreditManager from './CreditManager';

test('credit purchase updates balance', () => {
  render(<CreditManager />);
  const input = screen.getByRole('spinbutton');
  fireEvent.change(input, { target: { value: '100' } });
  fireEvent.click(screen.getByText(/Buy 100 Credits/i));
  expect(screen.getByText(/Current Balance: 200/i)).toBeInTheDocument();
});
