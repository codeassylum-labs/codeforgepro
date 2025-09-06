import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentInput from './CommentInput';

test('submits comment input', () => {
  render(<CommentInput />);
  fireEvent.change(screen.getByPlaceholderText(/Add a comment/i), { target: { value: 'Great update!' } });
  fireEvent.click(screen.getByText(/Submit/i));
  expect(window.alert).toHaveBeenCalledWith('Comment submitted: Great update!');
});
