import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('login form submits and stores token', async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText(/Login/i));
  expect(localStorage.getItem('token')).not.toBeNull();
});
