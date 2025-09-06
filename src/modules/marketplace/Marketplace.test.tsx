import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedAgents from './FeaturedAgents';

const mockAgents = [
  { id: '1', title: 'SalesBot', category: 'Business', price: 500, creator: 'Lon', createdAt: '2025-09-01' },
  { id: '2', title: 'SupportGenie', category: 'Support', price: 300, creator: 'Amina', createdAt: '2025-09-02' }
];

test('renders featured agents correctly', () => {
  render(<FeaturedAgents agents={mockAgents} />);
  expect(screen.getByText('SalesBot')).toBeInTheDocument();
  expect(screen.getByText('SupportGenie')).toBeInTheDocument();
});
