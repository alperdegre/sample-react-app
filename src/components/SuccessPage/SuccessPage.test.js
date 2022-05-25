import { render, screen } from '@testing-library/react';
import React from 'react';
import SuccessPage from './SuccessPage';

describe('SuccessPage', () => {
  it('should render a SuccessPage', () => {
    render(<SuccessPage />);
    expect(screen.getByText('THANK YOU FOR YOUR PURCHASE')).toBeInTheDocument();
  });
});
