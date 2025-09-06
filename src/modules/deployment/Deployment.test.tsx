import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeployButton from './DeployButton';
import RollbackButton from './RollbackButton';

test('deploy button triggers alert', () => {
  render(<DeployButton />);
  fireEvent.click(screen.getByText(/Deploy Agent/i));
  expect(window.alert).toHaveBeenCalled();
});

test('rollback button triggers alert', () => {
  render(<RollbackButton />);
  fireEvent.click(screen.getByText(/Rollback/i));
  expect(window.alert).toHaveBeenCalled();
});
