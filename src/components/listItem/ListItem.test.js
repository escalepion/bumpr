import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './index';

it('renders list item', () => {
  render(<ListItem text="sample text" desc='sample desc' main={true} />);
  expect(screen.getByText('sample text')).toBeInTheDocument();
  expect(screen.getByText('sample desc')).toBeInTheDocument();
});