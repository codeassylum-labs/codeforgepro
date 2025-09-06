import React from 'react';
import { render, screen } from '@testing-library/react';
import TemplateLibrary from './TemplateLibrary';

test('renders template library', () => {
  render(<TemplateLibrary />);
  expect(screen.getByText(/Template Library/i)).toBeInTheDocument();
});
