import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toast from './Toast';
import ConfirmDialog from './ConfirmDialog';

test('renders toast with success message', () => {
  render(<Toast message="Saved successfully" type="success" />);
  expect(screen.getByText(/Saved successfully/i)).toBeInTheDocument();
});

test('renders confirmation dialog and triggers callbacks', () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();
  render(<ConfirmDialog message="Are you sure?" onConfirm={onConfirm} onCancel={onCancel} />);
  fireEvent.click(screen.getByText(/Confirm/i));
  expect(onConfirm).toHaveBeenCalled();
});
