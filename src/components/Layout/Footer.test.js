import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />);
    expect(
      screen.getByText('© 2021 Coffee Company. All rights reserved.')
    ).toBeInTheDocument();
  });
});
