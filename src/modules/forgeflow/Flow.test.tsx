import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlowEditor from './FlowEditor';

test('renders flow editor and buttons', () => {
  render(<FlowEditor />);
  expect(screen.getByText(/Save Flow/i)).toBeInTheDocument();
  expect(screen.getByText(/Run Flow/i)).toBeInTheDocument();
});
