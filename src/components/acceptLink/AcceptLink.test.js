import React from 'react';
import { render, screen } from '@testing-library/react';
import AcceptLink from './index';

it('renders accept link', () => {
  render(<AcceptLink text="sample text" />);
  expect(screen.getByText('sample text')).toBeInTheDocument();
});