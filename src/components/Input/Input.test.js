import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

it('renders input', () => {
  render(<Input label="Input label" />);
  expect(screen.getByText('Input label')).toBeInTheDocument();
});