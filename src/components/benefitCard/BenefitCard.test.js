import React from 'react';
import { render, screen } from '@testing-library/react';
import BenefitCard from './index';

it('renders benefit card', () => {
  render(<BenefitCard title="sample title" desc="sample desc" />);
  expect(screen.getByText('sample title')).toBeInTheDocument();
  expect(screen.getByText('sample desc')).toBeInTheDocument();
});