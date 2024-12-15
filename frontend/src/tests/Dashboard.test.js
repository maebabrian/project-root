import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/Dashboard';

test('renders incident dashboard', () => {
  render(<Dashboard />);
  const headingElement = screen.getByText(/Incident Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
