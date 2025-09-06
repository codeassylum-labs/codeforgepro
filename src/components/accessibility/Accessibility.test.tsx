import React from 'react';
import { render, screen } from '@testing-library/react';
import SkipToContent from './SkipToContent';

test('renders skip to content link', () => {
  render(<SkipToContent />);
  expect(screen.getByText(/Skip to main content/i)).toBeInTheDocument();
});
