import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonaDashboard from './PersonaDashboard';

test('renders persona dashboard', () => {
  render(<PersonaDashboard />);
  expect(screen.getByText(/Agent Persona/i)).toBeInTheDocument();
});
