import React from 'react';
import { render, screen } from '@testing-library/react';
import HeatmapOverlay from './HeatmapOverlay';

test('renders heatmap overlay', () => {
  render(<HeatmapOverlay />);
  expect(screen.getByText(/Agent Activity Heatmap/i)).toBeInTheDocument();
});
